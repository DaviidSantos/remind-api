import { CreateAccountController } from "../controller/CreateAccountController";
import { makeCreateAccountUseCase } from "./makeCreateAccountUseCase";

export function makeCreateAccountController(): CreateAccountController {
  const useCase = makeCreateAccountUseCase();

  return new CreateAccountController(useCase);
}
