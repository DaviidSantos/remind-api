import { Id } from "../../global/types/id/Id";
import { Account } from "../model/Account";

export interface IAccountRepository {
  create(data: Account): Promise<Id>;
}
