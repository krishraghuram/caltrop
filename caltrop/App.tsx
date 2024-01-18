import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { YearGrid } from './components/YearGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <YearGrid
        onStateChange={(month, date, state) => console.log(month, date, state)}
      />
    </SafeAreaView >
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
