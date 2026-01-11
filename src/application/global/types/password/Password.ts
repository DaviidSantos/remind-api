import { regex } from "../../regex";
import { InvalidValueError } from "../errors/InvalidValueError";
import bcrypt from "bcryptjs";

export class Password {
  constructor(private text: string) {
    this.validate(text);

    this.text = this.encryptPassword(this.text);
  }

  public getValue(): string {
    return this.text;
  }

  private validate(text: string): void {
    if (text.length < 8) {
      throw new InvalidValueError(
        "The provided password is less than 8 characters long!"
      );
    }

    if (!regex.UPPERCASE_PATTERN.test(text)) {
      throw new InvalidValueError(
        "The provided password needs to have at least 1 uppercase letter!"
      );
    }

    if (!regex.LOWERCASE_PATTERN.test(text)) {
      throw new InvalidValueError(
        "The provided password needs to have at least 1 lowercase letter!"
      );
    }
  }

  private encryptPassword(password: string): string {
    const encryptedPassword = bcrypt.hashSync(password, 10);

    return encryptedPassword;
  }
}
