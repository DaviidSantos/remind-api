import { Request, Response } from "express";
import { createAccountRequestValidator } from "../validator/createAccountRequestValidator";
import { CreateAccountUseCase } from "../useCase/createAccountUseCase/CreateAccountUseCase";
import { CreateAccountRequest } from "../request/CreateAccountRequest";
import { Email } from "../../global/types/email/Email";
import { Password } from "../../global/types/password/Password";
import { ZodError } from "zod";
import { ConflictError } from "../../global/types/errors/ConflictError";
import { InvalidValueError } from "../../global/types/errors/InvalidValueError";

export class CreateAccountController {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  handle = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = createAccountRequestValidator.parse(req.body);

      const account = new CreateAccountRequest(
        data.firstName,
        data.lastName,
        new Email(data.email),
        new Password(data.password),
        new Password(data.confirmationPassword)
      );

      const createdAccountId = await this.createAccountUseCase.execute(account);

      res.location(`/api/v1/accounts/${createdAccountId}`);
      res.status(201).end();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          data: {
            error: { message: error.issues },
          },
        });
      }

      if (error instanceof InvalidValueError) {
        res.status(400).json({
          data: {
            error: { message: error.message },
          },
        });
      }

      if (error instanceof ConflictError) {
        res.status(409).json({
          data: {
            error: { message: error.message },
          },
        });
      }

      res.status(500).json({
        data: {
          error,
        },
      });
    }
  };
}
