<script setup lang="ts">
import { useMuseumState } from '../../composables/useMuseumState'

const { nearbyArtwork } = useMuseumState()
</script>

<template>
  <div
    v-if="nearbyArtwork"
    class="fixed bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-black/80 px-4 py-2 text-white"
  >
    Pressione E para interagir
  </div>
</template>
