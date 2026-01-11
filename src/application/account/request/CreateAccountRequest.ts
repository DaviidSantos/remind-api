import { Email } from "../../global/types/email/Email";
import { Password } from "../../global/types/password/Password";

export class CreateAccountRequest {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: Email,
    public readonly password: Password,
    public readonly confirmationPassword: Password
  ) {}
}
