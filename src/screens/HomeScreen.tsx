import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Recipe } from '../types';
import { SearchBar } from '../components/SearchBar';
import { RecipeCard } from '../components/RecipeCard';
import { searchRecipes, getRandomRecipes } from '../services/api';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadRandomRecipes();
  }, []);

  const loadRandomRecipes = async () => {
    setLoading(true);
    try {
      const randomRecipes = await getRandomRecipes(12);
      setRecipes(randomRecipes);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar las recetas');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadRandomRecipes();
      return;
    }

    setLoading(true);
    setOffset(0);
    try {
      const response = await searchRecipes(searchQuery, 0, 12);
      setRecipes(response.results);
      setHasMore(response.results.length < response.totalResults);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron buscar las recetas');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loading || !hasMore || !searchQuery.trim()) return;

    const newOffset = offset + 12;
    setLoading(true);
    try {
      const response = await searchRecipes(searchQuery, newOffset, 12);
      setRecipes(prev => [...prev, ...response.results]);
      setOffset(newOffset);
      setHasMore(response.results.length > 0);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar más recetas');
    } finally {
      setLoading(false);
    }
  };

  const renderRecipe = ({ item }: { item: Recipe }) => (
    <RecipeCard
      recipe={item}
      onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
    />
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmit={handleSearch}
      />
      {recipes.length === 0 && !loading ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No se encontraron recetas</Text>
        </View>
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 8,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});