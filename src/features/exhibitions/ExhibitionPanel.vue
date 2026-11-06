<script setup lang="ts">
import { useMuseumState } from '../../composables/useMuseumState'

const { selectedArtwork } = useMuseumState()
</script>

<template>
  <aside
    v-if="selectedArtwork"
    class="fixed right-6 top-6 z-20 rounded-xl bg-black/80 p-6 text-white"
  >
    Obra selecionada: {{ selectedArtwork }}
  </aside>
</template>
