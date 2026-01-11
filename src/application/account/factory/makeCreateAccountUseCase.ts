import { CreateAccountUseCase } from "../useCase/createAccountUseCase/CreateAccountUseCase";
import { makeAccountRepository } from "./makeAccountRepository";

export function makeCreateAccountUseCase(): CreateAccountUseCase {
  const repository = makeAccountRepository();
  
  return new CreateAccountUseCase(repository);
}
