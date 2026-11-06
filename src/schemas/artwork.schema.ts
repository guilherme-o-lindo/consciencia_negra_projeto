import { z } from 'zod'

export const ArtworkSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  artist: z.string(),
  roomId: z.string(),
})

export type Artwork = z.infer<typeof ArtworkSchema>
