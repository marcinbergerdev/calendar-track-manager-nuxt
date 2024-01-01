<template>
  <div class="events-container">
    <ul class="events-list">
      <CalendarToolsEventsItem
        v-for="{ id, title, time, note, isCompleted, isNotification } in events"
        :key="id"
        :id="id"
        :title="title"
        :time="time"
        :note="note"
        :is-completed="isCompleted"
        :is-notification="isNotification"
      ></CalendarToolsEventsItem>
    </ul>

    <BaseButton mode="filled-lt" class="events-exit" @click="closeEventList"
      >Wyjdź</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import { useEditor } from "../../../store/useEditor";
const editor = useEditor();

type Event = {
  id: number;
  title: string;
  time: string;
  note: string;
  isCompleted: boolean;
  isNotification: boolean;
};

const events = ref<Event[]>([
  {
    id: 0,
    title: "Kurs niemieckiego",
    time: "10:00",
    note: `Zrób notatki, pamiętaj aby dużo sie wsłuchiwać i zadawać pytania 
    jeżeli cokolwiek bedzie dla mnie nie jasne to pytaj odrazu
    `,
    isCompleted: false,
    isNotification: false,
  },
  {
    id: 1,
    title: "Trening",
    time: "12:00",
    note: `Zrób klate i nogi.
    `,
    isCompleted: false,
    isNotification: false,
  },
  {
    id: 2,
    title: "Zamów jedzonko",
    time: "10:00",
    note: `Dzisij spagetti i pamietaj o dodatkowym sosie.
    `,
    isCompleted: false,
    isNotification: false,
  },
]);

const closeEventList = () => {
  editor.selectedDay = null;
  editor.isEvent = false;
};
</script>

<style scoped lang="scss">
.events-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;

  padding: 0 0.3rem;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-clr);

  @media (width >= 950px) {
    width: 26rem;
    height: 35rem;
    top: 50%;
    right: -13%;
    transform: translate(13%, -50%);
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
