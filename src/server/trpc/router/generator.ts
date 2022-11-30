import { z } from "zod"

import { router, publicProcedure } from "../trpc"
import axios from "axios"

export const generatorRouter = router({
  duck: publicProcedure
    .input(z.object({
      apiKey: z.string().min(62)
    }))
    .mutation(async ({input}) => {
      const generateResponse = await axios.post("https://quack.duckduckgo.com/api/email/addresses", undefined, {
        headers: {"Authorization": `Bearer ${input.apiKey}`}
      })
      return {
        address: `${generateResponse.data.address}@duck.com`
      }
    })
})
