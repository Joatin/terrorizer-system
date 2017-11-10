

export interface EventWrapper<T extends { __typename: string }> {
  eventNumber: number;
  aggregateId: string;
  data: T;
  createdAt: Date;
  createdBy: string;
}
