import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";


export const ProgressBar = (props: { Progress: number }) => {
    const { Progress } = props

    return (
        <View style={styles.bg}>
            <View style={{
                width: `${Progress * 100 ?? 50}%`,
                ...styles.fg
            }}>
                <View style={styles.highlight} />
            </View>
        </View>
    )
}