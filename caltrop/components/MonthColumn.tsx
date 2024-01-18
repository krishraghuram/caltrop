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

const MonthColumn = (props: MonthProps) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text variant='titleLarge'>{props.title}</Text>
            <FlatList
                scrollEnabled={false}
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