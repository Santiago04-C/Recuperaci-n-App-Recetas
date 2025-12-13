import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe, WeeklyPlan } from '../types';
import { getWeeklyPlan, saveWeeklyPlan } from '../services/storage';

interface PlannerContextType {
  weeklyPlan: WeeklyPlan;
  addRecipeToDay: (day: string, recipe: Recipe) => void;
  removeRecipeFromDay: (day: string, recipeId: number) => void;
  loading: boolean;
}

const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

export const usePlanner = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error('usePlanner must be used within a PlannerProvider');
  }
  return context;
};

interface PlannerProviderProps {
  children: ReactNode;
}

export const PlannerProvider: React.FC<PlannerProviderProps> = ({ children }) => {
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeeklyPlan();
  }, []);

  const loadWeeklyPlan = async () => {
    try {
      const savedPlan = await getWeeklyPlan();
      setWeeklyPlan(savedPlan);
    } catch (error) {
      console.error('Error loading weekly plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRecipeToDay = async (day: string, recipe: Recipe) => {
    try {
      const updatedPlan = {
        ...weeklyPlan,
        [day]: [...weeklyPlan[day], recipe],
      };
      await saveWeeklyPlan(updatedPlan);
      setWeeklyPlan(updatedPlan);
    } catch (error) {
      console.error('Error adding recipe to day:', error);
    }
  };

  const removeRecipeFromDay = async (day: string, recipeId: number) => {
    try {
      const updatedPlan = {
        ...weeklyPlan,
        [day]: weeklyPlan[day].filter(recipe => recipe.id !== recipeId),
      };
      await saveWeeklyPlan(updatedPlan);
      setWeeklyPlan(updatedPlan);
    } catch (error) {
      console.error('Error removing recipe from day:', error);
    }
  };

  const value: PlannerContextType = {
    weeklyPlan,
    addRecipeToDay,
    removeRecipeFromDay,
    loading,
  };

  return (
    <PlannerContext.Provider value={value}>
      {children}
    </PlannerContext.Provider>
  );
};