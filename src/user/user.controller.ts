import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { paramIdDecorator } from 'src/decorator/param-id-decorator';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { LogInterceptor } from 'src/interceptor/log.interceptor';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch.user.dto';
import { UpdatePutUserDTO } from './dto/update-put.user.dto';
import { UserService } from './user.service';

@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor) //usado aqui funciona em todas essas rotas
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  //@UseInterceptors(LogInterceptor) //usado aqui funciona somente nesta rota

  //@Roles(Role.Admin, Role.User)
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  //@UseGuards(ThrottlerGuard) pode ser usado na rota que escolher como aqui, junto com os outros guards
  @Roles(Role.Admin, Role.User)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Roles(Role.Admin) //quando não passa o decorator todos tem acesso, pois nao tem validaçao
  @Get(':id')
  async findOne(@paramIdDecorator() id: number) {
    console.log({ id });
    return this.userService.findOne(id);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async updatePartial(
    @Body() body: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updatePartial(id, body);
  }

  @Roles(Role.Admin)
  @Put(':id')
  async update(
    @Body() body: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, body);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
