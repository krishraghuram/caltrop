import { DayButton, DayButtonState } from './DayButton';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';

type MonthColumnProps = {
    title: string;
    days: number;
    onStateChange?: (date: number, state: DayButtonState) => void;
}

const MonthColumn = (props: MonthColumnProps) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text variant='titleMedium'>{props.title}</Text>
            <ScrollView scrollEnabled={false}>
                {Array.from({ length: props.days }, (x, i) => i + 1).map((item => {
                    return (
                        <DayButton
                            key={item}
                            onStateChange={(state) => props?.onStateChange?.(item, state)}>
                            {item}
                        </DayButton>
                    );
                }))}
            </ScrollView>
        </View>
    );
}

export { MonthColumn, MonthColumnProps };