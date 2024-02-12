<template>
  <NuxtErrorBoundary>
    <SettingsContainer />

    <template #error="{ error }">
        <ErrorSettingsMessage :error="error" redirect-to="/"/>
    </template>
  </NuxtErrorBoundary>
</template>

