

export interface EventWrapper<T extends { __typename: string }> {
  eventNumber: string;
  aggregateId: string;
  data: T;
  createdAt: string;
  createdBy: string;
}
