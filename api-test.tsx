import { searchRecipes, getRecipeDetails, getRandomRecipes } from '../src/services/api';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock environment variables
jest.mock('@env', () => ({
  SPOONACULAR_API_KEY: 'test-api-key',
}));

describe('API Service', () => {
  beforeEach(() => {
    mockedAxios.create.mockReturnValue(mockedAxios);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchRecipes', () => {
    it('should search recipes successfully', async () => {
      const mockResponse = {
        data: {
          results: [
            {
              id: 1,
              title: 'Test Recipe',
              image: 'test.jpg',
              readyInMinutes: 30,
              servings: 4,
            },
          ],
          totalResults: 1,
          offset: 0,
          number: 12,
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await searchRecipes('pasta', 0, 12);

      expect(mockedAxios.get).toHaveBeenCalledWith('/complexSearch', {
        params: {
          query: 'pasta',
          offset: 0,
          number: 12,
          addRecipeInformation: true,
          fillIngredients: true,
        },
      });

      expect(result).toEqual(mockResponse.data);
    });

    it('should handle search error', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

      await expect(searchRecipes('pasta')).rejects.toThrow('API Error');
    });
  });

  describe('getRecipeDetails', () => {
    it('should get recipe details successfully', async () => {
      const mockRecipe = {
        id: 1,
        title: 'Test Recipe',
        image: 'test.jpg',
        readyInMinutes: 30,
        servings: 4,
        summary: 'Test summary',
        instructions: 'Test instructions',
      };

      mockedAxios.get.mockResolvedValueOnce({ data: mockRecipe });

      const result = await getRecipeDetails(1);

      expect(mockedAxios.get).toHaveBeenCalledWith('/1/information');
      expect(result).toEqual(mockRecipe);
    });
  });

  describe('getRandomRecipes', () => {
    it('should get random recipes successfully', async () => {
      const mockRecipes = [
        {
          id: 1,
          title: 'Random Recipe 1',
          image: 'random1.jpg',
          readyInMinutes: 25,
          servings: 2,
        },
        {
          id: 2,
          title: 'Random Recipe 2',
          image: 'random2.jpg',
          readyInMinutes: 35,
          servings: 6,
        },
      ];

      mockedAxios.get.mockResolvedValueOnce({ data: { recipes: mockRecipes } });

      const result = await getRandomRecipes(2);

      expect(mockedAxios.get).toHaveBeenCalledWith('/random', {
        params: { number: 2 },
      });

      expect(result).toEqual(mockRecipes);
    });
  });
});