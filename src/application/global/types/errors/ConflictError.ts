export class ConflictError extends Error {
  name = "ConflictError";

  constructor(message: string) {
    super(message);
  }
}
