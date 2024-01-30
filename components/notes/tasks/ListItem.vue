<template>
  <li class="task-item" :style="setBackgroundColor">
    <BaseButton view="empty" class="task-item__edit">
      <svg
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
        />
      </svg>
    </BaseButton>


    <section class="task-message-title">
      <h2 class="task-message-title__name">{{ title }}</h2>
    </section>


    <BaseButton view="empty" class="task-item__check">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor">
          <path
            d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
          />
          <path
            fill-rule="evenodd"
            d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    </BaseButton>


    <section class="task-message">
      <NotesTasksContentMessage v-if="noteType === 'message'" :message="content"></NotesTasksContentMessage>
      <NotesTasksContentCheckList v-else :checklist="content"></NotesTasksContentCheckList>
    </section>


    <BaseButton view="empty" class="task-item__delete">
      <svg
        class="task-item__delete-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
        />
      </svg>
    </BaseButton>
  </li>
</template>

<script setup lang="ts">
import { Task } from '~/types/Notes';

const { color } = defineProps<{
  id: string;
  title: string;
  content: string | Task[];
  color: string;
  noteType: string;
}>();

const setBackgroundColor = computed(() => {
  return { "background-color": color };
});
</script>

<style scoped lang="scss">
.task-item {
  display: grid;
  grid-template-areas:
    "editButton title checkButton"
    "noteMessage noteMessage noteMessage"
    "deleteButton deleteButton deleteButton";
  grid-template-columns: 12% 76% 12%;
  grid-template-rows: 1fr 4fr 1fr;

  padding: 1rem 1.5rem;
  width: min(30rem, 90%);
  height: 35rem;
  border-radius: 2.5rem;
  color: var(--text-clr);

  &__edit,
  &__check,
  &__delete {
    @media (width >= 950px) {
      font-size: 2.7rem;
    }
  }

  &__edit {
    display: flex;
    grid-area: editButton;
    align-self: center;
    justify-self: flex-start;
  }

  &__check {
    display: flex;
    grid-area: checkButton;
    align-self: center;
    justify-self: flex-end;
  }

  &__delete {
    grid-area: deleteButton;
    justify-self: flex-end;
    align-self: flex-end;

    &-icon {
      display: block;
      color: var(--error-clr);
    }
  }
}

.task-message-title {
  max-width: 80%;
  grid-area: title;
  place-self: center;
  
  &__name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.8rem;
  }
}

.task-message {
  grid-area: noteMessage;
  overflow: hidden;
}
</style>
