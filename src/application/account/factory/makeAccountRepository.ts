import { IAccountRepository } from "../repository/IAccountRepository";
import { PrismaAccountRepository } from "../repository/PrismaAccountRepository";

export function makeAccountRepository(): IAccountRepository {
  return new PrismaAccountRepository();
}
