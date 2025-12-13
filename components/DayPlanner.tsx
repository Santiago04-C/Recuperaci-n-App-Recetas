import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { Recipe } from '../types';
import { RecipeItem } from './RecipeItem';

interface DayPlannerProps {
  day: string;
  recipes: Recipe[];
  onRecipePress: (recipe: Recipe) => void;
  onRemoveRecipe: (recipeId: number) => void;
  onAddRecipe: () => void;
}

export const DayPlanner: React.FC<DayPlannerProps> = ({
  day,
  recipes,
  onRecipePress,
  onRemoveRecipe,
  onAddRecipe,
}) => {
  const renderRecipe = ({ item }: { item: Recipe }) => (
    <RecipeItem
      recipe={item}
      onPress={() => onRecipePress(item)}
      onRemove={() => onRemoveRecipe(item.id)}
      showRemove
    />
  );

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.dayTitle}>{day}</Text>
        {recipes.length === 0 ? (
          <Text style={styles.emptyText}>No hay recetas planificadas</Text>
        ) : (
          <FlatList
            data={recipes}
            renderItem={renderRecipe}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        )}
        <Button
          mode="outlined"
          onPress={onAddRecipe}
          style={styles.addButton}
          icon="plus"
        >
          Agregar receta
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginVertical: 16,
  },
  addButton: {
    marginTop: 12,
  },
});