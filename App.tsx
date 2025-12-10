import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { PlannerProvider } from './src/context/PlannerContext';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <FavoritesProvider>
          <PlannerProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <AppNavigator />
          </PlannerProvider>
        </FavoritesProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;