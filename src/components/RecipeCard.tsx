import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { Recipe } from '../types';
import { useFavorites } from '../context/FavoritesContext';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
  const { isFavorite, addFavorite, removeFavoriteById } = useFavorites();
  const isRecipeFavorite = isFavorite(recipe.id);

  const handleFavoritePress = () => {
    if (isRecipeFavorite) {
      removeFavoriteById(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: recipe.image }} style={styles.image} />
        <Card.Content style={styles.content}>
          <View style={styles.header}>
            <Title style={styles.title} numberOfLines={2}>
              {recipe.title}
            </Title>
            <IconButton
              icon={isRecipeFavorite ? 'heart' : 'heart-outline'}
              iconColor={isRecipeFavorite ? '#e74c3c' : '#666'}
              size={24}
              onPress={handleFavoritePress}
            />
          </View>
          <Paragraph style={styles.time}>
            ⏱️ {recipe.readyInMinutes} min
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flex: 1,
  },
  card: {
    elevation: 4,
  },
  image: {
    height: 150,
  },
  content: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});