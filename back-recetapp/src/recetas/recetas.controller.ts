import { Controller, Get, Query } from '@nestjs/common';
import { RecetasService } from './recetas.service';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  @Get()
  async getRecetas(@Query('preferencia') preferencia: string) {
    return this.recetasService.filtrarRecetas(preferencia);
  }
}
