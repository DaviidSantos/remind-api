import { Email } from "../../global/types/email/Email";
import { EntityMetadata } from "../../global/types/entityMetadata/EntityMetadata";
import { MetadataStatus } from "../../global/types/metadataStatus/MetadataStatus";
import { Password } from "../../global/types/password/Password";

export class Account {
  constructor(
    private firstName: string,
    private lastName: string,
    private email: Email,
    private password: Password,
    private metadata: EntityMetadata
  ) {}

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email.getValue();
  }

  public getPassword(): string {
    return this.password.getValue();
  }

  public getCreationDate(): Date {
    return this.metadata.getCreationDate();
  }

  public getUpdateDate(): Date | null {
    return this.metadata.getCreationDate();
  }

  public getAccountStatus(): MetadataStatus {
    return this.metadata.getStatus();
  }
}
