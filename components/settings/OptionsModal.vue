<template>
  <div id="modal" class="modal-overlay">
    <div class="settings-modal-container">
      <header class="settings-modal-header">
        <h2 class="settings-modal-header__title">
          <slot name="header" />
        </h2>
        <BaseButton view="empty" class="close-modal" @click="$emit('closeModal')">
          <svg
            class="close-modal__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
            />
          </svg>
        </BaseButton>
      </header>

      <section class="settings-form-container">
        <slot />
      
      </section>

    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  
  @media(width >= 768px){
    background-color: rgba(#000, 0.5);
  }
}

.settings-modal-container {
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: 100vh;
  background-color: var(--bg-clr);
  overflow: auto;

  @media(width >= 768px){
    max-width: 50rem;
    height: auto;
    border-radius: 2rem 2rem 1.5rem 1.5rem;
  }
}

.settings-modal-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: var(--primary-clr);
  color: var(--text-clr);

  @media(width >= 768px){
    border-radius: 1.5rem 1.5rem 0 0
  }

  &__title{
    font-size: 2rem;
  }
}


.settings-form-container{
  flex: 1;
  display: flex;
  padding: 3rem 0;
}

.close-modal{
  display: flex;
  padding: 0.3rem;
  border: 1px solid var(--text-clr-drk);
  border-radius: 50%;
}
</style>
