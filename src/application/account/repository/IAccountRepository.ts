import { Email } from "../../global/types/email/Email";
import { Id } from "../../global/types/id/Id";
import { CreateAccountRequest } from "../request/CreateAccountRequest";

export interface IAccountRepository {
  create(data: CreateAccountRequest): Promise<Id>;
  existsByEmail(email: Email): Promise<boolean>;
}
