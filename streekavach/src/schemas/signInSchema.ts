import { z } from 'zod'

export const signInSchema = z.object({
  //identifier as email
    identifier: z.string(),
  password: z.string(),
});