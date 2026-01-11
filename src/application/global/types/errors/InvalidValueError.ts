export class InvalidValueError extends Error {
  name = "InvalidValueError";

  constructor(message: string) {
    super(message);
  }
}
