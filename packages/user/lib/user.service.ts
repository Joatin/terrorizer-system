import { Store } from './store';
import { AddUserEvent } from './event/add-user.event';

export class UserService {
  constructor(
    private store: Store
  ) {

  }

  /**
   * A command for adding a new user
   *
   * @param {string} aggregateId a generated GUID for this user
   * @param {string} externalId an external identifier for the user, such as an openid sub
   */
  public addUser(aggregateId: string, externalId: string) {


    this.store.applyEvent<AddUserEvent>({
      eventNumber: 0,
      aggregateId,
      data: {
        __typename: 'ADD_USER',
        externalUserId: externalId
      },
      createdAt: new Date(),
      createdBy: ''
    });
  }
}
