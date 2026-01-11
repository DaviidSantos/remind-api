import { InvalidValueError } from "../errors/InvalidValueError";

export class Email {
  private VALIDATION_PATTERN =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(private text: string) {
    this.validate(text);
  }

  public getValue(): string {
    return this.text;
  }

  private validate(text: string): void {
    if (!this.VALIDATION_PATTERN.test(text)) {
      throw new InvalidValueError(
        `The value format for the provided email '${text}' is invalid!`
      );
    }
  }
}
