import axios from 'axios';
import { SPOONACULAR_API_KEY } from '@env';
import { Recipe, SearchResponse } from '../types';

const API_KEY = SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const searchRecipes = async (
  query: string,
  offset: number = 0,
  number: number = 12
): Promise<SearchResponse> => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        query,
        offset,
        number,
        addRecipeInformation: true,
        fillIngredients: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export const getRecipeDetails = async (id: number): Promise<Recipe> => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

export const getRandomRecipes = async (number: number = 12): Promise<Recipe[]> => {
  try {
    const response = await api.get('/random', {
      params: {
        number,
      },
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    throw error;
  }
};