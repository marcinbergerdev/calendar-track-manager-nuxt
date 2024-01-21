<template>
  <section class="editor-animation-container">
    <div class="animation-icon-container">

      <span class="animation-icon-box">
        <svg
          class="animation-icon-box__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path
              d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
            />
          </g>
        </svg>
      </span>


      <span class="animation-icon-box__text">Dodawanie...</span>

    </div>
  </section>
</template>

<style scoped lang="scss">
.editor-animation-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.animation-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem 0;
  width: 100%;
  height: 100%;

  &__text {
    font-size: 1.4rem;
    color: var(--text-clr);
  }
}

@property --fill {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 10%;
}

@keyframes iconFade {
  0% {
    --fill: 0%;
  }

  100% {
    --fill: 100%;
  }
}

.animation-icon-box {
  background: conic-gradient(from 0deg, green var(--fill), transparent var(--fill));
  animation: iconFade 0.2s forwards;
  border-radius: 5rem;

  &__icon {
    margin: 0.3rem;
    font-size: 6rem;
    color: var(--success-clr);
    background-color: #111418;
    border-radius: 5rem;
  }
}
</style>
