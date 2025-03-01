import axios from 'axios';

const API_URL = 'https://67ad62e73f5a4e1477dd8388.mockapi.io/api/v1';

export interface Recipe {
  id: string;
  nombre: string;
  tiempo: number;
  categoria: string;
  imageurl: string;
  tipo: string[];
  ingredientes: {
    nombre: string;
    cantidad: number;
    unidad: string;
  }[];
  pasos: {
    descripcion: string;
    duracion: number;
  }[];
}

export const fetchRecipes = async (preference?: string): Promise<Recipe[]> => {
  try {
    const endpoint = preference 
      ? `${API_URL}/receta?preferencia=${preference}` 
      : `${API_URL}/receta`;
    
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await axios.get(`${API_URL}/receta/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    return null;
  }
};