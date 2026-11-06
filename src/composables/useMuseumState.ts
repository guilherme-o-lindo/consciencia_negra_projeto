import { ref } from 'vue'

const selectedArtwork = ref<string | null>(null)
const nearbyArtwork = ref<string | null>(null)

export function useMuseumState() {
  return { selectedArtwork, nearbyArtwork }
}
