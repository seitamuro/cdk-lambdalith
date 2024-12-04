import { serve } from "@hono/node-server"
import { app } from "../hello"

serve({
  fetch: app.fetch,
  port: 8080
})