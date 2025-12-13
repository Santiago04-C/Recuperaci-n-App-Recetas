import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { ActivityIndicator, Portal, Modal, Text, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Recipe } from '../types';
import { DayPlanner } from '../components/DayPlanner';
import { RecipeItem } from '../components/RecipeItem';
import { usePlanner } from '../context/PlannerContext';
import { useFavorites } from '../context/FavoritesContext';

type PlannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Planner'>;

interface PlannerScreenProps {
  navigation: PlannerScreenNavigationProp;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_NAMES = {
  Monday: 'Lunes',
  Tuesday: 'Martes',
  Wednesday: 'Miércoles',
  Thursday: 'Jueves',
  Friday: 'Viernes',
  Saturday: 'Sábado',
  Sunday: 'Domingo',
};

export const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
  const { weeklyPlan, addRecipeToDay, removeRecipeFromDay, loading } = usePlanner();
  const { favorites } = useFavorites();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('');

  const handleAddRecipe = (day: string) => {
    if (favorites.length === 0) {
      Alert.alert(
        'Sin favoritos',
        'Primero agrega algunas recetas a favoritos para poder planificarlas'
      );
      return;
    }
    setSelectedDay(day);
    setModalVisible(true);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    addRecipeToDay(selectedDay, recipe);
    setModalVisible(false);
  };

  const renderFavoriteRecipe = ({ item }: { item: Recipe }) => (
    <RecipeItem
      recipe={item}
      onPress={() => handleSelectRecipe(item)}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {DAYS.map((day) => (
          <DayPlanner
            key={day}
            day={DAY_NAMES[day as keyof typeof DAY_NAMES]}
            recipes={weeklyPlan[day] || []}
            onRecipePress={(recipe) =>
              navigation.navigate('RecipeDetail', { recipeId: recipe.id })
            }
            onRemoveRecipe={(recipeId) => removeRecipeFromDay(day, recipeId)}
            onAddRecipe={() => handleAddRecipe(day)}
          />
        ))}
      </ScrollView>

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.modalTitle}>Seleccionar receta</Text>
          <ScrollView style={styles.modalContent}>
            {favorites.map((recipe) => (
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                onPress={() => handleSelectRecipe(recipe)}
              />
            ))}
          </ScrollView>
          <Button onPress={() => setModalVisible(false)} style={styles.cancelButton}>
            Cancelar
          </Button>
        </Modal>
      </Portal>
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
  scrollView: {
    flex: 1,
  },
  modal: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 8,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  modalContent: {
    maxHeight: 400,
  },
  cancelButton: {
    margin: 16,
  },
});