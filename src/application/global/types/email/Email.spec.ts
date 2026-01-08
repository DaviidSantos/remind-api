import { describe, expect, test } from "vitest";
import { Email } from "./Email";
import { InvalidValueError } from "../errors/InvalidValueError";

const input = {
  invalidEmail: "invalid-email@com",
  validEmail: "valid-email@example.com",
};

describe("Email", () => {
  test("Should throw 'InvalidValueError' when email is invalid", () => {
    expect(() => new Email(input.invalidEmail)).toThrowError(InvalidValueError);
  });

  test("Should pass validation when email is valid", () => {
    expect(() => new Email(input.validEmail)).not.toThrow();
  });
});
