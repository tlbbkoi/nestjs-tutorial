import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from 'src/repository/user.repository';
import { ApiResponse } from 'src/type/common.type';
import { EditUserDto } from './dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { IUserItemList } from 'src/type/user.type';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private userRepository: UserRepository,
  ) {}

  async editUser(
    userId: string,
    dto: EditUserDto,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;

    return user;
  }

  async getAll(
    filterUserDto: FilterUserDto,
  ): Promise<{
    data: IUserItemList[];
    totalCount: number;
  }> {
    const users =
      await this.userRepository.getAll(
        filterUserDto,
      );
    return {
      ...users,
      //statusCode: HttpStatus.OK,
      //message: 'Success',
    };
  }
}
