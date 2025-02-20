import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { Preferences } from '../users/enums/preferences.enum';

@Injectable()
export class RecetasService {
  private readonly urlApi = 'https://67ad62e73f5a4e1477dd8388.mockapi.io/api/v1/receta';

  private readonly relacionPreferencias = {
    [Preferences.deportista]: ['Alta en proteína', 'Bajas en calorías', 'Fáciles y rápidas'],
    [Preferences.ganar_musculo]: ['Alta en proteína'],
    [Preferences.familiar]: ['Comida familiar y reconfortante'],
    [Preferences.perder_peso]: ['Bajas en calorías', 'Veganas'],
    [Preferences.vegano]: ['Veganas'],
    [Preferences.ajetreado]: ['Fáciles y rápidas', 'Comida familiar y reconfortante'],
  };

  constructor(private readonly httpService: HttpService) { }

  async filtrarRecetas(preferencia: string) {
    const categorias = this.relacionPreferencias[preferencia] || [];
    if (categorias.length === 0) {
      return { message: 'Preferencia no válida o sin recetas asociadas' };
    }

    const recetas$ = this.httpService.get(this.urlApi);
    const response = await lastValueFrom(recetas$);

    const recetas = response.data;
    return recetas.filter((receta: any) =>
      receta.tipo.some((tipo: string) => categorias.includes(tipo))
    );
  }
}
