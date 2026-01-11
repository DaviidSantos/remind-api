import { prisma } from "../../global/lib/prisma";
import { Email } from "../../global/types/email/Email";
import { Id } from "../../global/types/id/Id";
import { CreateAccountRequest } from "../request/CreateAccountRequest";
import { IAccountRepository } from "./IAccountRepository";

export class PrismaAccountRepository implements IAccountRepository {
  async create(data: CreateAccountRequest): Promise<Id> {
    const { id } = await prisma.account.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.getValue(),
        password: data.password.getValue(),
      },
      select: {
        id: true,
      },
    });

    return id;
  }

  async existsByEmail(email: Email): Promise<boolean> {
    const account = await prisma.account.findUnique({
      where: {
        email: email.getValue(),
      },
    });

    return !!account;
  }
}
