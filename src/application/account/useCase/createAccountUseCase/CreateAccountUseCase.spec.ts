import { beforeEach, describe, expect, test, vi } from "vitest";
import { IAccountRepository } from "../../repository/IAccountRepository";
import { ConflictError } from "../../../global/types/errors/ConflictError";
import { CreateAccountUseCase } from "./CreateAccountUseCase";
import { Email } from "../../../global/types/email/Email";
import { Password } from "../../../global/types/password/Password";
import { CreateAccountRequest } from "../../request/CreateAccountRequest";

const input = {
  createAccountRequest: new CreateAccountRequest(
    "John",
    "Doe",
    new Email("john.doe@email.com"),
    new Password("5G7rz63D")
  ),
};

describe("Create Account", () => {
  let createAccountUseCase: CreateAccountUseCase;
  let mockedAccountRepository: IAccountRepository;

  beforeEach(() => {
    vi.clearAllMocks();

    mockedAccountRepository = {
      create: vi.fn(),
      existsByEmail: vi.fn(),
    };

    createAccountUseCase = new CreateAccountUseCase(mockedAccountRepository);
  });

  test("Should throw 'ConflictError' when email is already registered", async () => {
    vi.mocked(mockedAccountRepository.existsByEmail).mockResolvedValue(true);

    expect(
      async () => await createAccountUseCase.execute(input.createAccountRequest)
    ).rejects.toThrowError(ConflictError);
  });

  test("Should return the record id when account creation is successful", async () => {
    const createdUserId = crypto.randomUUID();

    vi.mocked(mockedAccountRepository.existsByEmail).mockResolvedValue(false);
    vi.mocked(mockedAccountRepository.create).mockResolvedValue(createdUserId);

    const id = await createAccountUseCase.execute(input.createAccountRequest);

    expect(id).toEqual(createdUserId);
  });
});
