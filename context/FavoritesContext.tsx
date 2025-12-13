import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe } from '../types';
import { getFavorites, saveFavorite, removeFavorite } from '../services/storage';

interface FavoritesContextType {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavoriteById: (recipeId: number) => void;
  isFavorite: (recipeId: number) => boolean;
  loading: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await getFavorites();
      setFavorites(savedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (recipe: Recipe) => {
    try {
      await saveFavorite(recipe);
      setFavorites(prev => [...prev, recipe]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavoriteById = async (recipeId: number) => {
    try {
      await removeFavorite(recipeId);
      setFavorites(prev => prev.filter(recipe => recipe.id !== recipeId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const isFavorite = (recipeId: number): boolean => {
    return favorites.some(recipe => recipe.id === recipeId);
  };

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavoriteById,
    isFavorite,
    loading,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};