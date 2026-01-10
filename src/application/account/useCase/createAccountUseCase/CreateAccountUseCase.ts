import { ConflictError } from "../../../global/types/errors/ConflictError";
import { IAccountRepository } from "../../repository/IAccountRepository";
import { CreateAccountRequest } from "../../request/CreateAccountRequest";

export class CreateAccountUseCase {
  constructor(private readonly repository: IAccountRepository) {}

  async execute(data: CreateAccountRequest) {
    const isEmailAlreadyRegistered = await this.repository.existsByEmail(
      data.email
    );

    if (isEmailAlreadyRegistered) {
      throw new ConflictError(
        `There is already another account registered with the following email: ${data.email.getValue()}`
      );
    }

    const createdAccountId = await this.repository.create(data);

    return createdAccountId;
  }
}
