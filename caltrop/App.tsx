import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DayButton } from './components/DayButton';
import { MonthColumn } from './components/Month';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <View style={{ width: 50, height: 50, borderRadius: 10000 }}> */}
      {/* <Button mode="contained" style={{ width: 50, height: 50, borderRadius: 10000 }}>1</Button> */}
      {/* </View> */}

      {/* <DayButton>31</DayButton> */}

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <MonthColumn title="jan" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        {/* <MonthColumn title="feb" days={28} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="mar" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="apr" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="may" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="june" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="july" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="aug" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="sept" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="oct" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="nov" days={30} onStateChange={(date, state) => console.log(date, state)}></MonthColumn>
        <MonthColumn title="dec" days={31} onStateChange={(date, state) => console.log(date, state)}></MonthColumn> */}
      </View>
      {/* <Chip
        onPress={() => console.log('Pressed')}
        style={{ height: 65, width: 65, borderRadius: 1000, alignItems: 'center', justifyContent: 'center' }}
      >
        1
      </Chip> */}
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
