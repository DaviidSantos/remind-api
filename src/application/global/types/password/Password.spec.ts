import { describe, expect, test } from "vitest";
import { InvalidValueError } from "../errors/InvalidValueError";
import { Password } from "./Password";

const input = {
  lessThanEightCaracters: "R48Q5ci",
  noUpperCaseLetter: "i3l966se",
  noLowerCaseLetter: "EX8459VL",
  validPassword: "5G7rz63D",
};

describe("Password", () => {
  test("Should throw 'InvalidValueError' when password length is less than 8 characters", () => {
    expect(() => new Password(input.lessThanEightCaracters)).toThrowError(
      InvalidValueError
    );
  });

  test("Should throw 'InvalidValueError' when password does not contain an uppercase letter", () => {
    expect(() => new Password(input.noUpperCaseLetter)).toThrowError(
      InvalidValueError
    );
  });

  test("Should throw 'InvalidValueError' when password does not contain a lowercase letter", () => {
    expect(() => new Password(input.noLowerCaseLetter)).toThrowError(
      InvalidValueError
    );
  });

  test("Should pass validation when password is valid", () => {
    expect(() => new Password(input.validPassword)).not.toThrow();
  });
});
