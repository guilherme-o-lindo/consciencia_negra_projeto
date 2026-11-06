import { z } from 'zod'

export const SettingsSchema = z.object({
  quality: z.enum(['low', 'medium', 'high']),
  showHints: z.boolean(),
  sensitivity: z.number().min(0.1).max(3),
})

export type MuseumSettings = z.infer<typeof SettingsSchema>
