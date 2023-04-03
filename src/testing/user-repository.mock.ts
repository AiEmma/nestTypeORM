import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { userEntityList } from './user-entity-list-mock';

export const userRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn().mockResolvedValue(userEntityList),
    findOneBy: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn().mockResolvedValue(userEntityList[0]),
    delete: jest.fn(),
  },
};
