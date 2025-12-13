export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary?: string;
  instructions?: string;
  extendedIngredients?: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
}

export interface SearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface WeeklyPlan {
  [day: string]: Recipe[];
}

export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { recipeId: number };
  Favorites: undefined;
  Planner: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  FavoritesTab: undefined;
  PlannerTab: undefined;
};