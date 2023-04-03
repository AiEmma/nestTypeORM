import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create.user.dto';

export const createUserDTO: CreateUserDTO = {
  name: 'Danielle Costa',
  email: 'danielle@dani.com',
  birthAt: '2000-01-01',
  password: '1aA!56',
  role: Role.Admin,
};
