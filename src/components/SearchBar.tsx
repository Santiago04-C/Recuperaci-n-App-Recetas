import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onSubmit,
  placeholder = 'Buscar recetas...',
}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmit}
        style={styles.searchbar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchbar: {
    elevation: 4,
  },
});