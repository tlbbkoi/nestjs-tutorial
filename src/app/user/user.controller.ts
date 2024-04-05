import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { FilterUserDto } from './dto/filter-user.dto';
import { ApiResponse } from 'src/type/common.type';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get()
  async getAll(
    @Query() filterUserDto: FilterUserDto,
  ): Promise<ApiResponse<any[]>> {
    const users = await this.userService.getAll(
      filterUserDto,
    );
    return {
      ...users,
      statusCode: HttpStatus.OK,
      message: 'Success',
    };
  }

  @Patch()
  editUser(
    @GetUser('id') userId: string,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}
