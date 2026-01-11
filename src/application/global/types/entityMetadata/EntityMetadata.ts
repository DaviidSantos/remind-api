import { MetadataStatus } from "../metadataStatus/MetadataStatus";

export class EntityMetadata {
  constructor(
    private createdAt: Date,
    private updatedAt: Date | null,
    private entityStatus: MetadataStatus
  ) {}

  public getCreationDate(): Date {
    return this.createdAt;
  }

  public getUpdateDate(): Date | null {
    return this.updatedAt;
  }

  public getStatus(): MetadataStatus {
    return this.entityStatus;
  }
}
