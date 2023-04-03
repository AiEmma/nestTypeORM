import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Danielle Costa',
    email: 'danielle@dani.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$LC6JBVwmlUg9Age5A6b8YOVQhFuo.B2uddO92TescSZqpMHut01Vq',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Daniel Pedroso',
    email: 'daniel@dani.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$LC6JBVwmlUg9Age5A6b8YOVQhFuo.B2uddO92TescSZqpMHut01Vq',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
