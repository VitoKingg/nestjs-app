import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  update(id: string, updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  remove(id: string): string {
    return `This action removes a #${id} cat`;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): string {
    return `This action returns a #${id} cat.`;
  }
}
