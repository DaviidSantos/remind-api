import { Router } from "express";

export class ServerRouter {
  public static initializeRouter(): Router {
    const router = Router();

    this.healthRoutes(router);

    return router;
  }

  private static healthRoutes(router: Router) {
    const ENDPOINT = "/healthz";

    router.get(ENDPOINT, (req, res) => {
      res.status(200).json({
        timestamp: Date.now(),
        status: "OK",
      });
    });
  }
}
