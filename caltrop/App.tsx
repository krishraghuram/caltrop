import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, Icon, PaperProvider } from 'react-native-paper';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { useMemo } from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import * as React from 'react';

const WorkoutRoute = () => <Text>Workout</Text>;

const FoodRoute = () => <Text>Food</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'workout', title: 'Workout', focusedIcon: 'dumbbell' },
    { key: 'food', title: 'Food', focusedIcon: 'food-apple' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    workout: WorkoutRoute,
    food: FoodRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MyComponent />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
