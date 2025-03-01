import { useState, useEffect } from 'react';
import { fetchRecipes, Recipe } from '../services/api';

export const useRecipes = (preference?: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes(preference);
        setRecipes(data);
        setError(null);
      } catch (err) {
        setError('Failed to load recipes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [preference]);

  return { recipes, loading, error };
};