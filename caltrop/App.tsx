import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function YearTab({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <YearGrid
        title={new Date().getFullYear().toString() + " - " + route.params.title}
        onStateChange={(month, date, state) => console.log(month, date, state)}
      />
    </SafeAreaView >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Workout" component={YearTab} initialParams={{ title: "Workout" }}></Tab.Screen>
        <Tab.Screen name="Food" component={YearTab} initialParams={{ title: "Food" }}></Tab.Screen>
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
