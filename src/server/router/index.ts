import { Router } from "express";
import { makeCreateAccountController } from "../../application/account/factory/makeCreateAccountController";

export class ServerRouter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public initializeRouter(): Router {
    this.healthRoutes();
    this.accountRoutes();

    return this.router;
  }

  private healthRoutes(): void {
    const ENDPOINT = "/healthz";

    this.router.get(ENDPOINT, (req, res) => {
      res.status(200).json({
        timestamp: Date.now(),
        status: "OK",
      });
    });
  }

  private accountRoutes(): void {
    const ENDPOINT = "/accounts";

    const createAccountController = makeCreateAccountController();

    this.router.post(ENDPOINT, createAccountController.handle);
  }
}
