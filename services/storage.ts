import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe, WeeklyPlan } from '../types';

const FAVORITES_KEY = 'favorites';
const WEEKLY_PLAN_KEY = 'weeklyPlan';

export const getFavorites = async (): Promise<Recipe[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const saveFavorite = async (recipe: Recipe): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = [...favorites, recipe];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

export const removeFavorite = async (recipeId: number): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const getWeeklyPlan = async (): Promise<WeeklyPlan> => {
  try {
    const plan = await AsyncStorage.getItem(WEEKLY_PLAN_KEY);
    return plan ? JSON.parse(plan) : {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  } catch (error) {
    console.error('Error getting weekly plan:', error);
    return {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  }
};

export const saveWeeklyPlan = async (plan: WeeklyPlan): Promise<void> => {
  try {
    await AsyncStorage.setItem(WEEKLY_PLAN_KEY, JSON.stringify(plan));
  } catch (error) {
    console.error('Error saving weekly plan:', error);
  }
};