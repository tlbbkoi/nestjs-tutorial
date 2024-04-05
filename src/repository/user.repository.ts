import { Injectable } from '@nestjs/common';
import { FilterUserDto } from 'src/app/user/dto/filter-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserItemList } from 'src/type/user.type';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(
    filterUserDto: FilterUserDto,
  ): Promise<{
    data: IUserItemList[];
    totalCount: number;
  }> {
    const { name, page, size } = filterUserDto;
    let whereClause = {};

    if (name) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            firstName: {
              contains: name?.toLowerCase(),
            },
          },
          {
            lastName: {
              contains: name?.toLowerCase(),
            },
          },
        ],
      };
    }
    const users = await this.prisma.user.findMany(
      {
        where: {
          ...whereClause,
        },
        take: size,
        skip: (page - 1) * size,
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    );

    const totalCount =
      await this.prisma.user.count({
        where: whereClause,
      });

    return {
      data: users,
      totalCount: totalCount,
    };
  }
}
