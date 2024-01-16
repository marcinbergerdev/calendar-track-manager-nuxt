<template>
  <li class="event-element" :class="eventChecked">
    <header class="event-header">
      <h2 class="event-header__title">{{ titleEmptyValidation }}</h2>
      <span class="event-header__time">{{ timeEmptyValidation }}</span>
    </header>

    <section class="event-note">
      <p>{{ noteEmptyValidation }}</p>
    </section>

    <section class="event-actions">
      <BaseButton class="delete" @click="deleteSelectedEvent">
        <svg
          class="delete-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          /></svg
      ></BaseButton>

      <BaseButton class="edit" @click="editSelectedEvent"
        ><svg
          class="edit-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
          />
          <path
            fill="currentColor"
            d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
          /></svg
      ></BaseButton>

      <BaseButton class="check" @click="toggleEventAsDone"
        ><svg
          class="check-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007l3.849-5.886a.625.625 0 0 1 .865-.181"
            clip-rule="evenodd"
          /></svg
      ></BaseButton>
    </section>
  </li>
</template>

<script setup lang="ts">
import { EventElement } from "@/types/Date";
import { useEditor } from "../../../store/useEditor";

const emit = defineEmits<{
  (e: "events-list-update"): void;
  (
    e: "event-edit",
    title: string,
    time: string,
    note: string,
    isNotification: boolean
  ): void;
}>();

const props = defineProps<{
  eventId: string;
  title: string;
  time: string;
  note: string;
  isCompleted: boolean;
  isNotification: boolean;
}>();

const { eventId, title, note, time, isCompleted, isNotification } = toRefs(props);

const editor = useEditor();
const isSelectedEvent = editor.selectedEvent;
const setNewEventDataInputs = editor.setNewEventDataInput;
const selectedDay = editor.selectedDay;
const isEventChecked = ref(false);

const eventChecked = computed(() => {
  return { "event-checked": isCompleted.value };
});

const titleEmptyValidation = computed(() => {
  return title.value || "Brak tytułu";
});

const noteEmptyValidation = computed(() => {
  return note.value || "Brak notatki...";
});

const timeEmptyValidation = computed(() => {
  return time.value || "Brak godz.";
});

const deleteSelectedEvent = async () => {
  const selectedDay = editor.selectedDay;

  if (!!selectedDay.id && selectedDay.year) {
    try {
      await deleteUserEventFetch(selectedDay.id, selectedDay.year, eventId.value);
      emit("events-list-update");
    } catch (err: any) {
      throw createError(err);
    }
  }
};

const editSelectedEvent = () => {
  if (!isSelectedEvent) {
    const newEventData: EventElement = {
      eventId: eventId.value,
      title: title.value,
      time: time.value,
      note: note.value,
      isNotification: isNotification.value,
    };

    setNewEventDataInputs(newEventData);
  }

  editor.openEditor();
};

const toggleEventAsDone = async () => {
  isEventChecked.value = !isCompleted.value;

  if (!!selectedDay.id && selectedDay.year) {
    try {
      await toggleCompletionEventFetch(
        selectedDay.id,
        selectedDay.year,
        eventId.value,
        isEventChecked.value,
        isNotification.value
      );

      console.log(isCompleted.value);
      emit("events-list-update");
    } catch (err: any) {
      throw createError(err);
    }
  }
};



onMounted(() => {
  console.log(eventId.value);
  console.log(title.value);
  console.log(time.value);
  console.log(note.value);
  console.log(isCompleted.value);
  console.log(isNotification.value);
});
</script>

<style scoped lang="scss">
.event-element {
  display: flex;
  flex-direction: column;
  gap: 0.8rem 0;
  padding-bottom: 1.5rem;
}
.event-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title,
  &__time {
    font-size: 2rem;

    @media (width >= 950px) {
      font-size: 1.5rem;
    }
  }

  &__time {
    font-weight: 600;
  }
}

.event-note {
  font-size: 1.3rem;

  @media (width >= 950px) {
    font-size: 1.1rem;
  }
}

.event-actions {
  position: relative;
  display: flex;
  gap: 0 1rem;

  margin-top: 2rem;
  height: 3.5rem;

  @media (width >= 950px) {
    height: 2.5rem;
  }

  .delete,
  .check {
    display: grid;
    place-items: center;
    width: 3.5rem;
    border-radius: 4px;
    @media (width >= 950px) {
      width: 2.5rem;
      opacity: 0.5;
      transition: opacity 0.1s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

  .delete {
    border: 1px solid var(--error-clr);
    .delete-icon {
      color: var(--error-clr);
    }
  }

  .edit {
    flex: 1;
    text-align: end;
    .edit-icon {
      height: 100%;
      font-size: 5rem;
      color: var(--text-clr);
    }
  }

  .check {
    border: 1px solid var(--success-clr);
    .check-icon {
      font-size: 3.3rem;
      color: var(--success-clr);

      @media (width >= 950px) {
        font-size: 2.3rem;
      }
    }
  }
}

.event-checked {
  text-decoration-line: line-through;
  opacity: 0.5;
}

.error-delete-message {
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 1;

  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.3rem;
  background-color: var(--text-clr);
  color: var(--primary-clr);
  border-radius: 0.5rem;
}
</style>
