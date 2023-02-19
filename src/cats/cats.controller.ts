import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './entities/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return this.catsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
