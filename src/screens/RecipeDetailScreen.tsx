import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { Text, ActivityIndicator, FAB, Chip } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Recipe } from '../types';
import { getRecipeDetails } from '../services/api';
import { useFavorites } from '../context/FavoritesContext';

type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

interface RecipeDetailScreenProps {
  navigation: RecipeDetailScreenNavigationProp;
  route: RecipeDetailScreenRouteProp;
}

export const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ route }) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, addFavorite, removeFavoriteById } = useFavorites();

  useEffect(() => {
    loadRecipeDetails();
  }, [recipeId]);

  const loadRecipeDetails = async () => {
    try {
      const recipeData = await getRecipeDetails(recipeId);
      setRecipe(recipeData);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar los detalles de la receta');
    } finally {
      setLoading(false);
    }
  };

  const handleFavoritePress = () => {
    if (!recipe) return;

    if (isFavorite(recipe.id)) {
      removeFavoriteById(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={styles.errorContainer}>
        <Text>No se pudo cargar la receta</Text>
      </View>
    );
  }

  const isRecipeFavorite = isFavorite(recipe.id);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.infoRow}>
            <Chip icon="clock-outline" style={styles.chip}>
              {recipe.readyInMinutes} min
            </Chip>
            <Chip icon="account-group" style={styles.chip}>
              {recipe.servings} porciones
            </Chip>
          </View>

          {recipe.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resumen</Text>
              <Text style={styles.text}>{stripHtml(recipe.summary)}</Text>
            </View>
          )}

          {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ingredientes</Text>
              {recipe.extendedIngredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredient}>
                  • {ingredient.original}
                </Text>
              ))}
            </View>
          )}

          {recipe.instructions && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Instrucciones</Text>
              <Text style={styles.text}>{stripHtml(recipe.instructions)}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <FAB
        icon={isRecipeFavorite ? 'heart' : 'heart-outline'}
        style={[styles.fab, { backgroundColor: isRecipeFavorite ? '#e74c3c' : '#666' }]}
        onPress={handleFavoritePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});