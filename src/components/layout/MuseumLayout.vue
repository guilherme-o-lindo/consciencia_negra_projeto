<script setup lang="ts">
import ExhibitionPanel from '../../features/exhibitions/ExhibitionPanel.vue'
import NavigationHUD from '../../features/navigation/NavigationHUD.vue'
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-background text-foreground">
    <slot />
    <ExhibitionPanel />
    <NavigationHUD />
  </main>
</template>
