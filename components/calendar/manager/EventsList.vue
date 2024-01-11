<template>
  <BaseLoadingSpinner mode="event" :is-background="false" v-if="isLoadingSpinner" />

  <div class="events-empty-message-container" v-if="isEmpty">
    <p class="events-empty-message-container__message">Add your events...</p>
    <BaseButton
      mode="filled-drk"
      class="events-empty-message-container__button"
      @click="redirectToEventEditor"
      >add event</BaseButton
    >
  </div>

  <ul class="events-list" v-else>
    <CalendarManagerEventsItem
      v-for="({ title, time, note, isCompleted, isNotification }, id) in events"
      :key="id"
      :event-id="id"
      :title="title"
      :time="time"
      :note="note"
      :is-completed="isCompleted"
      :is-notification="isNotification"
      @events-list-update="updateEventListAfterDeleting"
    ></CalendarManagerEventsItem>
  </ul>

  <BaseButton mode="filled-drk" class="events-exit" @click="editor.closeEditorAndEvent()"
    >Wyjdź</BaseButton
  >
</template>

<script setup lang="ts">
import { Event } from "@/types/Date";
import { useEditor } from "@/store/useEditor";

const editor = useEditor();
const events = ref<Event | unknown>(null);

const isLoadingSpinner = ref(false);
const isEmpty = ref(false);

const redirectToEventEditor = () => {
  editor.openEditor();
};

const getUserEvents = async () => {
  const selectedDay = editor.selectedDay;

  if (!!selectedDay.id && !!selectedDay.year) {
    try {
      const response: Event | unknown = await getUserEventsFetch(
        selectedDay.id,
        selectedDay.year
      );

      if (!response) {
        setEmptyMessageHandler();
        return;
      }

      setEventHandler(response);
    } catch (err: any) {
      throw createError(err);
    }
  }
};

const setEmptyMessageHandler = () => {
  isEmpty.value = true;
};

const setEventHandler = (response: Event | unknown) => {
  events.value = response;
};

const updateEventListAfterDeleting = async () => {
  await getUserEvents();
};

onMounted(async () => {
  isLoadingSpinner.value = true;
  await getUserEvents();
  isLoadingSpinner.value = false;
});
</script>

<style scoped lang="scss">
.events-empty-message-container {
  flex: 1;
  text-align: center;
  padding-top: 5rem;

  &__message {
    font-size: 1.6rem;
  }

  &__button {
    margin-top: 1rem;
    font-size: 1.4rem;
    padding: 0.3rem 1rem;
  }
}

.events-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem 0;

  padding: 4rem 1.5rem;
  width: 100%;
  overflow: auto;

  @media (width >= 950px) {
    padding: 3rem 1.5rem;
  }

  li {
    border-bottom: 1px solid var(--text-clr);
  }

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--text-clr);
  }
}
.events-exit {
  margin-bottom: 2rem;
  padding: 0.3rem 2rem;

  @media (width >= 950px) {
    margin-bottom: 0.7rem;
    padding: 0.5rem 1.5rem;
    font-size: 1.4rem;
  }
}
</style>
