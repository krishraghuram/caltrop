import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Icon } from 'react-native-paper';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { useMemo } from 'react';

const Tab = createBottomTabNavigator();

enum TabNames {
  Workout = "Workout",
  Food = "Food",
}

const TAB_ICONS = {
  [TabNames.Workout]: 'dumbbell',
  [TabNames.Food]: 'food-apple',
}

// TODO: remove "any"
const YearTab = ({ route, navigation }: any) => {
  return useMemo(() => (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <YearGrid
        title={new Date().getFullYear().toString() + " - " + route.name}
        onStateChange={(month, date, state) => {
          console.log(month, date, state);
        }}
      />
    </SafeAreaView>
  ), [route.name]);
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, lazy: false }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              return (<Icon source={TAB_ICONS[route.name as TabNames]} size={20} />);
            }}
            getLabelText={({ route }) => {
              return route.name;
            }}
          />
        )}
      >
        <Tab.Screen name={TabNames.Workout} component={YearTab}></Tab.Screen>
        <Tab.Screen name={TabNames.Food} component={YearTab}></Tab.Screen>
      </Tab.Navigator>
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
