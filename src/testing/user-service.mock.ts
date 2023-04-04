import { UserService } from '../user/user.service';
import { userEntityList } from './user-entity-list-mock';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    findOne: jest.fn().mockResolvedValue(userEntityList[0]),
    create: jest.fn().mockResolvedValue(userEntityList[0]),
    findAll: jest.fn().mockResolvedValue(userEntityList),
    updatePartial: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn().mockResolvedValue(userEntityList[0]),
    delete: jest.fn().mockResolvedValue(true),
  },
};
