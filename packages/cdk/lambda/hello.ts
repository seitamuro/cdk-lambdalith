import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { auth } from "./middleware/auth";

export const app = new Hono();

app.use("*", logger());
app.use("*", cors());

app.get("/hello", async (c) => {
  return c.json({ message: "Hello, world!" });
});

app.use("/user-status", auth);
app.get("/user-status", async (c) => {
  return c.json({ status: c.req});
});

app.use("/hello-with-auth", auth);
app.get("/hello-with-auth", async (c) => {
  return c.json({ message: "Hello, world! You're authorized!" });
})

export const handler = handle(app);
