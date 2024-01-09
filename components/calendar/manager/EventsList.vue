<template>
  <BaseLoadingSpinner mode="event" :is-background="false" v-if="isLoadingSpinner" />

  <ul class="events-list">
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

  <BaseButton mode="filled-lt" class="events-exit" @click="editor.closeEditorAndEvent()"
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

const getUserEvents = async () => {
  const selectedDay = editor.selectedDay;

  if (!!selectedDay.id && !!selectedDay.year) {
    try {
      const response: Event | unknown = await getUserEventsFetch(
        selectedDay.id,
        selectedDay.year
      );

      if (!response) {
        setEmptyListHandler();
        return;
      }

      setEventHandler(response);
    } catch (err: any) {
      throw createError(err);
    }
  }
};

const setEmptyListHandler = () => {
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
