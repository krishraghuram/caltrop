import { DayButtonState } from './DayButton';
import { ScrollView } from 'react-native';
import { MonthColumn } from './MonthColumn';
import { Text } from 'react-native-paper';

const MONTHS = {
    "Jan": 31,
    "Feb": 28,
    "Mar": 31,
    "Apr": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "Aug": 31,
    "Sept": 30,
    "Oct": 31,
    "Nov": 30,
    "Dec": 31,
}

type Month = keyof typeof MONTHS;

type YearGridProps = {
    onStateChange?: (month: Month, date: number, state: DayButtonState) => void;
}

const YearGrid = (props: YearGridProps) => {
    return (
        <>
            <Text variant='headlineLarge'>{new Date().getFullYear()}</Text>
            <ScrollView
                persistentScrollbar={true}
                contentContainerStyle={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                {
                    Object.entries(MONTHS).map(([month, days]) => {
                        return (
                            <MonthColumn
                                key={month}
                                title={month}
                                days={days}
                                onStateChange={(date, state) => props?.onStateChange?.(month as Month, date, state)} />
                        )
                    })
                }
            </ScrollView>
        </>
    );
}

export { YearGrid };