import React from "react";
import { styles } from "./styles";
import { Image, Text, View } from "react-native";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import Heart from "../../../assets/heart.png";

interface IHeaderProps {
    progress: number,
    lives: number
}

export const Header = (props: IHeaderProps) => {
    const { progress, lives } = props

    return (
        <View style={styles.root}>
            <ProgressBar Progress={progress ?? 0} />
            <View style={styles.liveContainer}>
                <Image style={styles.icon} source={Heart} resizeMode="contain" />
                <Text style={styles.liveText}>{lives}</Text>
            </View>
        </View>
    )
}