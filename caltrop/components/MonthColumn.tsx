import { useState } from 'react';
import { DayButton } from './DayButton';
import { FlatList, ScrollView, View } from 'react-native';
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

export { MonthColumn };