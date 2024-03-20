import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles'

interface IButtonProps {
    text: string,
    disabled: boolean,
    onPress: () => void
}

export const Button = (props: IButtonProps) => {
    const { text, disabled, onPress } = props
    console.log("HasValue",disabled)
    return (
        <Pressable onPress={() => props.onPress()} style={[styles.container, props.disabled ? styles.disabledContainer : {}]} disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

