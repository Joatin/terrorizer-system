import { EventWrapper } from './event-wrapper';

export interface Store {
  applyEvent<T  extends { __typename: string }>(event: EventWrapper<T>): Promise<any>;
  getEvents(aggregateId: string): Promise<EventWrapper<any>[]>
}
