import { DayButtonState } from './DayButton';
import { ScrollView, View } from 'react-native';
import { MonthColumn } from './MonthColumn';

// type Month = "jan" | "feb" | "mar" | "apr" | "may" | "june" | "july" | "aug" | "sept" | "oct" | "nov" | "dec";

// enum Month {
//     Jan = "Jan",
//     Feb = "Feb",
//     Mar = "Mar",
//     Apr = "Apr",
//     May = "May",
//     June = "June",
//     July = "July",
//     Aug = "Aug",
//     Sept = "Sept",
//     Oct = "Oct",
//     Nov = "Nov",
//     Dec = "Dec",
// }

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
        <ScrollView
            persistentScrollbar={true}
            contentContainerStyle={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingVertical: 30,
                paddingHorizontal: 20,
            }}
        >
            {
                Object.entries(MONTHS).map(([month, days]) => {
                    return (
                        <MonthColumn
                            title={month}
                            days={days}
                            onStateChange={(date, state) => props?.onStateChange?.(month as Month, date, state)} />
                    )
                })
            }
        </ScrollView>
    );
}

export { YearGrid };