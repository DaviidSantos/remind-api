import express, { Application, json, Router } from "express";
import helmet from "helmet";
import { ServerRouter } from "./router";

export class ExpressServer {
  private server: Application;

  constructor(private readonly PORT: number) {
    this.server = express();

    this.initializeMiddlewares();
    this.initializeRouter();
  }

  public start(): void {
    this.server.listen(this.PORT, () => {
      console.log(`Server started at http://localhost:${this.PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.server.use(json());
    this.server.use(helmet());
  }

  private initializeRouter() {
    const router = new ServerRouter();
    this.server.use("/api/v1", router.initializeRouter());
  }
}
