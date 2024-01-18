import { useState } from "react";
import { StyleSheet, Vibration } from "react-native";
import { Button } from "react-native-paper";

type DayButtonState = 'on' | 'off';

type DayButtonProps = {
    children: React.ReactNode;
    onStateChange?: (state: DayButtonState) => void;
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 55,
        minHeight: 55,
        minWidth: 55,
        borderRadius: Math.round(65 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    text: {
        fontSize: 10,
        marginHorizontal: 0,
        marginVertical: 0
    }
})

const DayButton = (props: DayButtonProps) => {
    const [state, setState] = useState<DayButtonState>('off');
    return (<Button
        mode={state == 'off' ? 'outlined' : 'contained'}
        onPress={() => {
            Vibration.vibrate([0, 250]);
            const newstate = state == 'off' ? 'on' : 'off';
            setState(newstate);
            props?.onStateChange?.(newstate);
        }}
        style={styles.button}
        contentStyle={styles.button}
        labelStyle={styles.text}
    >
        {props.children}
    </Button>);
}

export { DayButton };