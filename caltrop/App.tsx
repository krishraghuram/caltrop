import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { YearGrid } from './components/YearGrid';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <YearGrid
        onStateChange={(month, date, state) => console.log(month, date, state)}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
