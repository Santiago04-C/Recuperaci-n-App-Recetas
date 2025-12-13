import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { Recipe } from '../types';

interface RecipeItemProps {
  recipe: Recipe;
  onPress: () => void;
  onRemove?: () => void;
  showRemove?: boolean;
}

export const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  onPress,
  onRemove,
  showRemove = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {recipe.title}
        </Text>
        <Text style={styles.time}>⏱️ {recipe.readyInMinutes} min</Text>
      </View>
      {showRemove && onRemove && (
        <IconButton
          icon="close"
          size={20}
          onPress={onRemove}
          style={styles.removeButton}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    margin: 0,
  },
});