import { prisma } from "../../global/lib/prisma";
import { Id } from "../../global/types/id/Id";
import { Account } from "../model/Account";
import { IAccountRepository } from "./IAccountRepository";

export class PrismaAccountRepository implements IAccountRepository {
  async create(data: Account): Promise<Id> {
    const { id } = await prisma.account.create({
      data: {
        firstName: data.getFirstName(),
        lastName: data.getLastName(),
        email: data.getPassword(),
        password: data.getPassword(),
      },
      select: {
        id: true,
      },
    });

    return id;
  }
}
