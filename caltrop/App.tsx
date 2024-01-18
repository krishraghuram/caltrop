import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <YearGrid
      title={new Date().getFullYear().toString() + " - Workout"}
      onStateChange={(month, date, state) => console.log(month, date, state)}
    />
  );
}

function SettingsScreen() {
  return (
    <YearGrid
      title={new Date().getFullYear().toString() + " - Food"}
      onStateChange={(month, date, state) => console.log(month, date, state)}
    />
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function YearTab() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <YearGrid
          onStateChange={(month, date, state) => console.log(month, date, state)}
        />
      </SafeAreaView >
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
