import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MonthColumn } from './components/MonthColumn';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}
      >
        <MonthColumn title="jan" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="feb" days={28} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="mar" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        {/* <MonthColumn title="apr" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="may" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="june" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn> */}
        {/* <MonthColumn title="july" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="aug" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="sept" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="oct" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="nov" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="dec" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn> */}
      </ScrollView>
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
