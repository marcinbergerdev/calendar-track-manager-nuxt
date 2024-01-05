<template>
  <div class="events-container">
    <BaseLoadingSpinner
      mode="event"
      :is-background="false"
      v-if="isLoadingSpinner"
    ></BaseLoadingSpinner>

    <p v-if="error.isError">{{ error.message }}</p>

    <p v-if="isEmpty">Add events...</p>

    <ul class="events-list" v-else>
      <CalendarToolsEventsItem
        v-for="({ title, time, note, isCompleted, isNotification }, id) in events"
        :key="id"
        :event-id="id"
        :title="title"
        :time="time"
        :note="note"
        :is-completed="isCompleted"
        :is-notification="isNotification"
        @events-list-update="updateEventListAfterDeleting"
      ></CalendarToolsEventsItem>
    </ul>

    <BaseButton mode="filled-lt" class="events-exit" @click="editor.closeEditorAndEvent()"
      >Wyjdź</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { Event, Error } from "@/types/Date";
import { useEditor } from "@/store/useEditor";

const editor = useEditor();
const isLoadingSpinner = ref(false);
const isEmpty = ref(false);

const error = ref<Error>({
  name: "",
  message: "",
  isError: false,
});

const events = ref<Event | unknown>(null);

const getUserEvents = async () => {
  const selectedDay = editor.selectedDay;

  try {
    const response: Event | unknown = await getUserEventsFetch(
      selectedDay.id,
      selectedDay.year
    );

    if (!response) {
      setEmptyListHandler();
    } else {
      setEventHandler(response);
    }
  } catch (err: any) {
    error.value = err;
  }
};

const setEmptyListHandler = () => {
  isEmpty.value = true;
};

const setEventHandler = (response: Event | unknown) => {
  if (!!response) {
    const selectedEvents: Event | unknown = response;
    events.value = selectedEvents;
  }
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
.events-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem 0;

  padding: 0 0.3rem;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-clr);

  @media (width >= 950px) {
    top: 50%;
    right: -13%;
    transform: translate(13%, -50%);
    z-index: 20;

    width: 26rem;
    height: 35rem;
    border: 2px solid var(--bg-clr);
    border-radius: 1.5rem;
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
