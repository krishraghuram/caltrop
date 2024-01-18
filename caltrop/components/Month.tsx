import { useState } from 'react';
import { DayButton } from './DayButton';
import { FlatList, View } from 'react-native';
import { StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

type DayButtonState = 'on' | 'off';

type MonthProps = {
    title: string;
    days: number;
    onStateChange?: (date: number, state: DayButtonState) => void;
}

const styles = StyleSheet.create({
    button: {
        height: 65,
        width: 65,
        borderRadius: Math.round(65 / 2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 12
    }
})

const MonthColumn = (props: MonthProps) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text variant='titleLarge'>{props.title}</Text>
            <FlatList
                data={Array.from({ length: props.days }, (x, i) => i + 1)}
                renderItem={({ item }) => {
                    return (<DayButton
                        onStateChange={(state) => props?.onStateChange?.(item, state)}>
                        {item}
                    </DayButton>);
                }}
            />
        </View>
    );
}

export { MonthColumn };