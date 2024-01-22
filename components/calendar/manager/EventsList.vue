<template>
  <BaseLoadingSpinner mode="event" :is-background="false" v-if="isLoadingSpinner" />


  <div class="events-empty-message-container" v-if="isEmpty">
    <p class="events-empty-message-container__message">Add your events...</p>

    <BaseButton
      view="filled-drk"
      class="events-empty-message-container__button"
      @click="redirectToEventEditor"
    >
      add event
    </BaseButton>
  </div>


  <ul class="events-list" v-else>
    <CalendarManagerEventsItem
      v-for="event in events"
      :key="event[0]"
      :event-id="event[0]"
      :title="event[1].title"
      :time="event[1].time"
      :note="event[1].note"
      :is-completed="event[1].isCompleted"
      :is-notification="event[1].isNotification"
      @events-list-update="updateEventListAfterDeleting"
    ></CalendarManagerEventsItem>
  </ul>

  <BaseButton view="filled-drk" class="events-exit" @click="editor.closeEditorAndEvent()"
    >Wyjdź</BaseButton
  >
</template>

<script setup lang="ts">
import { Events, EventsList } from "@/types/Date";
import { useEditor } from "@/store/useEditor";

const editor = useEditor();
const events = ref<EventsList[]>([]);

const isLoadingSpinner = ref(false);
const isEmpty = ref(false);

const redirectToEventEditor = () => {
  editor.openEditor();
};

const getUserEvents = async () => {
  const selectedDay = editor.selectedDay;

  if (!!selectedDay.id && !!selectedDay.year) {
    try {
      const response = await getUserEventsFetch(selectedDay.year, selectedDay.id);

      if (!response) {
        setEmptyMessageHandler();
        return;
      }

      sortingEventsByHour(response);
    } catch (err: any) {
      throw createError(err);
    }
  }
};

const setEmptyMessageHandler = () => {
  isEmpty.value = true;
};

const sortingEventsByHour = (response: Events) => {
  const events: EventsList[] = Object.entries(response);

  const sortedEvents = events.sort((a, b) => {
    const timeA = a[1].time.split(":").map(Number);
    const timeB = b[1].time.split(":").map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    } else {
      return timeA[1] - timeB[1];
    }
  });

  setEventsHandler(sortedEvents);
};

const setEventsHandler = (sortedEvents: EventsList[]) => {
  events.value = sortedEvents;
};

const updateEventListAfterDeleting = () => {
  getUserEvents();
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
