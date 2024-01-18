import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
import { useCallback, useMemo, useState } from 'react';
import { Text } from 'react-native-paper';

const WorkoutRoute = () => <Text>Workout</Text>;

const FoodRoute = () => <Text>Food</Text>;

const YearRoute = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <YearGrid
        title={props.title}
        onStateChange={(month, date, state) => console.log(month, date, state)}
      />
    </SafeAreaView >
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'workout', title: 'Workout', focusedIcon: 'dumbbell' },
    { key: 'food', title: 'Food', focusedIcon: 'food-apple' },
  ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   workout: () => <YearRoute title={new Date().getFullYear().toString() + " - Workout"}></YearRoute>,
  //   food: () => <YearRoute title={new Date().getFullYear().toString() + " - Food"}></YearRoute>,
  // });
  const renderScene = BottomNavigation.SceneMap({
    workout: () => <Text>{new Date().getFullYear().toString() + " - Workout"}</Text>,
    food: () => <Text>{new Date().getFullYear().toString() + " - Food"}</Text>,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <StatusBar style="auto" />
  //     <YearGrid
  //       onStateChange={(month, date, state) => console.log(month, date, state)}
  //     />
  //   </SafeAreaView >
  // );
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
