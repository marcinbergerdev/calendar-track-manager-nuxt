<template>
  <Teleport to="body">
    <div class="notes-selector-modal">
      <form class="selector-form" @submit="saveTask">

        <header class="selector-header">
          <div class="selector-input-box">
            <label for="message">Message</label>
            <input type="radio" id="message" name="option" checked />
          </div>

          <div class="selector-input-box">
            <label for="checklist">Checklist</label>
            <input type="radio" id="checklist" name="option" />
          </div>
        </header>

        <section class="selector-title">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />
        </section>

        <section class="selector-options">
          <NotesSelectorMessage></NotesSelectorMessage>
          <!-- <NotesSelectorCheckList></NotesSelectorCheckList> -->
        </section>

        <section>
          <div v-for="(variant, id) in colorsVariant" :key="id">
            <label :for="variant.name"></label>
            <input
              type="radio"
              :id="variant.name"
              name="colors"
              :checked="variant.checked"
            />
          </div>
        </section>

        <section>
          <BaseButton>Close</BaseButton>
          <BaseButton type="submit">Save</BaseButton>
        </section>
      </form>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const colorsVariant = [
  { name: "black", color: "#161616" },
  { name: "grey", color: "#BCBCBC" },
  { name: "purple", color: "#AF31CE" },
  { name: "yellow", color: "#FFBB24" },
  { name: "green", color: "#68C023" },
  { name: "red", color: "#CA3F2C" },
  { name: "blue", color: "#2159E9", checked: true },
];
</script>

<style scoped lang="scss"></style>
