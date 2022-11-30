import { router } from "../trpc"
import { generatorRouter } from "./generator"

export const appRouter = router({
  generate: generatorRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter;
