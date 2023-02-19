import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './entities/cats.entity';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto): string {
    return 'This action adds a new cat.';
  }

  update(id: string, updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  remove(id: string): string {
    return `This action removes a #${id} cat`;
  }

  findAll(query: ListAllEntities): string {
    return `This action returns all cats (limit: ${query.limit}) items.`;
  }

  findOne(id: string): string {
    return `This action returns a #${id} cat.`;
  }
}
