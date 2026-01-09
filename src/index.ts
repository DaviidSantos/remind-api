import { ExpressServer } from "./server";
import { env } from "./config/env";

function startApplication() {
  const server = new ExpressServer(env.PORT);

  server.start();
}

startApplication();
