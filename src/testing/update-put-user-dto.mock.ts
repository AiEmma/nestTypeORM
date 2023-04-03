import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put.user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  name: 'Danielle Costa',
  email: 'danielle@dani.com',
  birthAt: '2000-01-01',
  password: '1aA!56',
  role: Role.Admin,
};
