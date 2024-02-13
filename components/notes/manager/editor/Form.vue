<template>
  <form class="editor-form" @submit.prevent="saveNote">
    <header class="editor-form-header" :class="setToggleOnSlidingZipper">
      <div class="editor-input-box">
        <label for="taskMessage">{{ $t("notes.editor.selectorMessage") }}</label>
        <input
          type="radio"
          id="taskMessage"
          name="option"
          value="message"
          v-model="toggleOptions"
        />
      </div>

      <div class="editor-input-box">
        <label for="tasks">{{ $t("notes.editor.selectorChecklist") }}</label>
        <input
          type="radio"
          id="tasks"
          name="option"
          value="checklist"
          v-model="toggleOptions"
        />
      </div>
    </header>

    <div class="editor-content">
      <section class="content-title">
        <label for="title">{{ $t("notes.editor.title") }}</label>
        <input
          type="text"
          id="title"
          name="title"
          :placeholder="$t('notes.editor.title')"
          v-model.trim="noteTitle"
        />
      </section>

      <section class="content-colors-variant">
        <div class="variants-box" v-for="(variant, id) in notes.colors" :key="id">
          <label
            :for="variant.name"
            :style="setBackgroundColor(variant.name)"
            :class="setActiveVariant(variant.name)"
          ></label>

          <input
            type="radio"
            :id="variant.name"
            name="color"
            :value="variant.name"
            v-model="colorVariant"
          />
        </div>
      </section>

      <section class="content-options">
        <NotesManagerEditorFormMessage
          v-if="toggleOptions !== 'checklist'"
          @update-message="updateMessageInput"
        />
        <NotesManagerEditorFormChecklist
          @update-checklist="updateChecklistInput"
          v-else
        />
      </section>

      <section class="content-interaction">
        <BaseButton
          view="border-lt"
          class="content-interaction__button"
          type="button"
          @click="notes.closeModal()"
        >
          {{ $t("notes.closeButton") }}
        </BaseButton>

        <BaseButton
          view="border-lt"
          class="content-interaction__button"
          type="submit"
          v-if="!notes.selectedTask"
        >
          {{ $t("notes.editor.saveButton") }}
        </BaseButton>

        <BaseButton
          view="border-lt"
          class="content-interaction__button"
          type="button"
          v-else
          @click="editNote"
        >
          {{ $t("notes.editor.editButton") }}
        </BaseButton>
      </section>
    </div>
  </form>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";
import { Task } from "@/types/Notes";
import { useNotes } from "@/store/useNotes";

const { t } = useI18n();
const notes = useNotes();
const taskId = ref("");
const toggleOptions = ref("message");
const noteTitle = ref("");
const colorVariant = ref("#808080");
const noteContent = ref<string | Task[]>("");

const updateUserTasks = inject("update-user-tasks", () => {});

const setToggleOnSlidingZipper = computed(() => {
  return { "checklist-active": toggleOptions.value === "checklist" };
});

const setActiveVariant = computed(() => {
  return (variantName: string) => {
    return { "variant-active": variantName === colorVariant.value };
  };
});

const setBackgroundColor = computed(() => {
  return (color: string) => {
    return { "background-color": color };
  };
});

const updateMessageInput = (message: string) => {
  noteContent.value = message;
};

const updateChecklistInput = (checklist: Task[]) => {
  noteContent.value = checklist;
};

const setTaskDataIfEditedIsSelected = () => {
  const selectedTask = notes.selectedTask;

  if (!!selectedTask && typeof selectedTask !== null) {
    taskId.value = selectedTask.noteId;
    toggleOptions.value = selectedTask.noteType;
    noteTitle.value = selectedTask.title;
    colorVariant.value = selectedTask.color;
    noteContent.value = selectedTask.content;
  }
};

const saveNote = async () => {
  const idIncreased = setIdIncreasing();

  const emptyTitle = t("notes.editor.emptyTitle");
  const emptyContent = t("notes.editor.emptyContent");

  const titleValidated = formInputValidation(emptyTitle, noteTitle.value) as string;
  const contentValidated = formInputValidation(emptyContent, noteContent.value);

  await saveUserNote(
    idIncreased,
    toggleOptions.value,
    titleValidated,
    colorVariant.value,
    contentValidated
  );
};

const saveUserNote = async (
  idValidated: number,
  toggleOptions: string,
  noteTitle: string,
  colorVariant: string,
  noteContent: string | Task[]
) => {
  try {
    await saveUserNotesMessageFetch(
      idValidated,
      toggleOptions,
      noteTitle,
      colorVariant,
      noteContent
    );
    updateUserTasks();
    notes.closeModal();
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw createError(err);
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError(t("settings.modal.errorMessage"));
    }
  }
};

const editNote = async () => {
  const emptyTitle = t("notes.editor.emptyTitle");
  const emptyContent = t("notes.editor.emptyContent");

  const titleValidated = formInputValidation(emptyTitle, noteTitle.value) as string;
  const contentValidated = formInputValidation(emptyContent, noteContent.value);

  await editUserNote(
    taskId.value,
    toggleOptions.value,
    titleValidated,
    colorVariant.value,
    contentValidated
  );
};

const editUserNote = async (
  taskId: string,
  toggleOptions: string,
  noteTitle: string,
  colorVariant: string,
  noteContent: string | Task[]
) => {
  try {
    await editUserNoteDataFetch(
      taskId,
      toggleOptions,
      noteTitle,
      colorVariant,
      noteContent
    );
    updateUserTasks();
    notes.closeModal();
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw createError(err);
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError(t("settings.modal.errorMessage"));
    }
  }
};

const setIdIncreasing = () => {
  const tasks = notes.notesList;
  if (!tasks) return 0;

  const convertedTasks = Object.entries(tasks);
  return convertedTasks.length++;
};

const formInputValidation = (message: string, content: string | Task[]) => {
  if ((Array.isArray(content) && content.length === 0)) {
    return message;
  }

  if(typeof content === "string" && content === ''){
    return message;
  }

  return content;
};

watch(toggleOptions, () => {
  if (toggleOptions.value === "message") {
    noteContent.value = "";
  }
});

onMounted(() => {
  setTaskDataIfEditedIsSelected();
});
</script>

<style scoped lang="scss">
.editor-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;

  padding: 2rem 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-clr);
  overflow: auto;

  @media (width >= 768px) {
    border-radius: 3rem;
  }
}

.editor-form-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 3.5rem;

  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: var(--text-clr);
  border: 2px solid var(--text-clr);
  border-radius: 5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(#fff, 0.2);
    border-radius: 5rem;
    outline: 2px solid var(--text-clr);
    transition: transform 0.15s ease-in-out;
  }
}

.checklist-active {
  &::before {
    transform: translateX(100%);
    transition: 0.2s ease-in-out;
  }
}

.editor-input-box {
  input {
    display: none;
  }

  label {
    @media (width >= 768px) {
      cursor: pointer;
    }
  }
}

.editor-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 3rem 0;
  width: min(100%, 85%);
}

.content-title {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 100%;

  label {
    font-size: 2.3rem;
    color: var(--text-clr);
  }

  input {
    padding: 0.9rem 1.5rem;
    font-size: 1.6rem;
    color: var(--text-clr);
    background: transparent;
    border-radius: 1.5rem;
    border: 0;
    outline: 2px solid var(--text-clr);

    &:focus {
      box-shadow: 0px 0px 10px rgba(#fff, 0.8);
    }
  }
}
.content-colors-variant {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
}

.variants-box {
  label {
    transform: rotate(45deg);
    display: block;
    width: 2rem;
    height: 2rem;

    @media (width >= 768px) {
      cursor: pointer;
    }
  }

  input {
    display: none;
  }
}

.variant-active {
  box-shadow: 0px 0px 10px rgba(#fff, 0.8);
}

.content-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 0.8rem 0;
  width: 100%;
  min-height: 25rem;
  max-height: 52vh;

  @media (width >= 768px) {
    max-height: 34vh;
    align-items: flex-start;
  }
}

.content-interaction {
  display: flex;
  gap: 0 3rem;

  &__button {
    padding: 0.4rem 1.5rem;
    border-radius: 2rem;

    @media (width >= 768px) {
      padding: 0.6rem 2.5rem;
    }
  }
}
</style>
