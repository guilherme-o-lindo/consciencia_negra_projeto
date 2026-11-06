<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { createMuseum } from './core/createMuseum'
import type { MuseumInstance } from './core/types'

const canvas = ref<HTMLCanvasElement | null>(null)
let museum: MuseumInstance | null = null

onMounted(() => {
  if (!canvas.value) return
  museum = createMuseum(canvas.value)
  museum.start()
})

onBeforeUnmount(() => {
  museum?.dispose()
  museum = null
})
</script>

<template>
  <canvas ref="canvas" class="absolute inset-0 h-full w-full" />
</template>
