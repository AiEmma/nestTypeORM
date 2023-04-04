import { UserService } from '../user/user.service';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    findOne: jest.fn(),
    create: jest.fn(),
    findAll: jest.fn(),
    updatePartial: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
