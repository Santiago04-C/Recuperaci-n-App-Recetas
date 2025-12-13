import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Recipe } from '../types';
import { RecipeItem } from '../components/RecipeItem';
import { useFavorites } from '../context/FavoritesContext';

type FavoritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favorites'>;

interface FavoritesScreenProps {
  navigation: FavoritesScreenNavigationProp;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation }) => {
  const { favorites, loading, removeFavoriteById } = useFavorites();

  const renderRecipe = ({ item }: { item: Recipe }) => (
    <RecipeItem
      recipe={item}
      onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
      onRemove={() => removeFavoriteById(item.id)}
      showRemove
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tienes recetas favoritas</Text>
        <Text style={styles.emptySubtext}>
          Agrega recetas a favoritos desde la pantalla de inicio o detalles
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  list: {
    paddingVertical: 8,
  },
});