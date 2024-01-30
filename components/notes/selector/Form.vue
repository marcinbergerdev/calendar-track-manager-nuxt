<template>
  <form class="selector-form" @submit.prevent="saveNote">
    <header class="selector-header" :class="setToggleOnSlidingZipper">
      <div class="selector-input-box">
        <label for="taskMessage">Message</label>
        <input
          type="radio"
          id="taskMessage"
          name="option"
          value="message"
          v-model="toggleOptions"
        />
      </div>

      <div class="selector-input-box">
        <label for="tasks">Checklist</label>
        <input
          type="radio"
          id="tasks"
          name="option"
          value="checklist"
          v-model="toggleOptions"
        />
      </div>
    </header>

    <div class="selector-form-content">
      <section class="selector-title">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          v-model.trim="noteTitle"
        />
      </section>

      <section class="selector-colors-variant">
        <div class="variants-box" v-for="(variant, id) in notes.colors" :key="id">
          <label
            :for="variant.name"
            :style="setBackgroundColor(variant.color)"
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

      <section class="selector-content-options">
        <Component :is="renderingManagerOptions" @update-note-content="handleNoteContent">
        </Component>
      </section>

      <section class="selector-interaction">
        <BaseButton
          view="border-lt"
          class="selector-interaction__button"
          type="button"
          @click="notes.closeModal()"
        >
          Close
        </BaseButton>

        <BaseButton view="border-lt" class="selector-interaction__button" type="submit">
          Save
        </BaseButton>
      </section>
    </div>
  </form>
</template>

<script setup lang="ts">
import { NuxtError } from "nuxt/app";
import { Task } from "@/types/Notes";
import { useNotes } from "@/store/useNotes";

const NotesSelectorMessage = resolveComponent("NotesSelectorMessage");
const NotesSelectorCheckList = resolveComponent("NotesSelectorCheckList");
const notes = useNotes();

const toggleOptions = ref("message");
const noteTitle = ref("");
const colorVariant = ref("grey");
const noteContent = ref<string | Task[]>("");
const updateUserTasks = inject("update-user-tasks", () => {});

const renderingManagerOptions = computed(() => {
  if (toggleOptions.value === "checklist") return NotesSelectorCheckList;
  return NotesSelectorMessage;
});

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

const handleNoteContent = (content: string | Task[]) => {
  noteContent.value = content;
};

const saveNote = async () => {
  const emptyNoteTitle = "Brak tytuł";
  const validatedNoteContent = formContentValidation(noteContent.value);

  saveUserNote(
    toggleOptions.value,
    noteTitle.value || emptyNoteTitle,
    colorVariant.value,
    validatedNoteContent
  );
};

const formContentValidation = (content: string | Task[]) => {
  const emptyContentMessage = "Brak zadania";

  if (content === "" || content.length === 0) {
    return emptyContentMessage;
  }

  return content;
};

const saveUserNote = async (
  toggleOptions: string,
  noteTitle: string,
  colorVariant: string,
  noteContent: string | Task[]
) => {
  try {
    await saveUserNotesMessageFetch(toggleOptions, noteTitle, colorVariant, noteContent);
    updateUserTasks();
  } catch (err: unknown) {
    if (typeof err === "string") {
    } else if (err === Object || err !== null) {
      throw createError(err as Partial<NuxtError>);
    } else {
      throw createError("Something goes wrong!, try later.");
    }
  } finally{
    notes.closeModal();
  }
};
</script>

<style scoped lang="scss">
.selector-form {
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

.selector-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 2rem;

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

.selector-input-box {
  input {
    display: none;
  }

  label {
    @media (width >= 768px) {
      cursor: pointer;
    }
  }
}

.selector-form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 3rem 0;
  width: min(100%, 85%);
}

.selector-title {
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
.selector-colors-variant {
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

.selector-content-options {
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

.selector-interaction {
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
