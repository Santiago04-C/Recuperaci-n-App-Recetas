// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

// Mock reanimated if it exists
jest.mock('react-native-reanimated', () => {
  try {
    return require('react-native-reanimated/mock');
  } catch {
    return {};
  }
});

// Mock gesture handler if it exists
try {
  require('react-native-gesture-handler/jestSetup');
} catch {
  // Gesture handler not installed, skip
}

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');