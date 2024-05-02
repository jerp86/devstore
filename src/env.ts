import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  const errorMessage = 'Invalid environment variables'
  console.error(errorMessage, parsedEnv.error.flatten().fieldErrors)

  throw new Error(errorMessage)
}

export const env = parsedEnv.data
