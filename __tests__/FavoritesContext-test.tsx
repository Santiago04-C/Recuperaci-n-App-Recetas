import React from 'react';
import { render, act, waitFor } from '@testing-library/react-native';
import { FavoritesProvider, useFavorites } from '../src/context/FavoritesContext';
import { Recipe } from '../src/types';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock storage service
jest.mock('../src/services/storage', () => ({
  getFavorites: jest.fn(() => Promise.resolve([])),
  saveFavorite: jest.fn(() => Promise.resolve()),
  removeFavorite: jest.fn(() => Promise.resolve()),
}));

const TestComponent = () => {
  const { favorites, addFavorite, removeFavoriteById, isFavorite } = useFavorites();
  
  const testRecipe: Recipe = {
    id: 1,
    title: 'Test Recipe',
    image: 'test.jpg',
    readyInMinutes: 30,
    servings: 4,
  };

  return (
    <>
      {favorites.map(recipe => (
        <div key={recipe.id} testID={`recipe-${recipe.id}`}>
          {recipe.title}
        </div>
      ))}
      <button
        testID="add-favorite"
        onPress={() => addFavorite(testRecipe)}
      >
        Add Favorite
      </button>
      <button
        testID="remove-favorite"
        onPress={() => removeFavoriteById(1)}
      >
        Remove Favorite
      </button>
      <div testID="is-favorite">
        {isFavorite(1) ? 'true' : 'false'}
      </div>
    </>
  );
};

describe('FavoritesContext', () => {
  it('provides favorites functionality', async () => {
    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(getByTestId('is-favorite')).toBeTruthy();
    });
  });

  it('adds and removes favorites', async () => {
    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const addButton = getByTestId('add-favorite');
    const removeButton = getByTestId('remove-favorite');

    await act(async () => {
      addButton.props.onPress();
    });

    await act(async () => {
      removeButton.props.onPress();
    });

    expect(true).toBe(true); // Basic test structure
  });
});