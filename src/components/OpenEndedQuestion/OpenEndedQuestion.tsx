import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TextInputComponent } from "react-native";
import { styles } from './styles';
import mascot from "../../../assets/mascot.png";
import { IQuestionOpenEndedOption } from "../../Interfaces/IQuestionOpenEndedOption";

export interface OpenEndedQuestionProps {
    sentence: string,
    answers: Array<IQuestionOpenEndedOption>,
    onChangeText: (result: boolean) => void,
    hasValue: (result: boolean) => void
}


export const OpenEndedQuestion = (props: OpenEndedQuestionProps) => {
    const {
        sentence,
        answers,
        onChangeText,
        hasValue } = props;
        const [inputTextValue, setInputTextValue] = useState<string>("")

    const onChange = (text: string) => {
        if (answers.some(ans => ans.text.toLocaleLowerCase().trim() === text.toLocaleLowerCase().trim()))
            onChangeText(true)
        else
            onChangeText(false)
        setInputTextValue(text);
    }

    useEffect(()=> {
        hasValue(inputTextValue.length === 0 ? false : true);
    }, [inputTextValue])

    useEffect(() => {
        setInputTextValue("")
    },[sentence]);

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image source={mascot} style={styles.mascot} resizeMode='contain' />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{sentence}</Text>
                    <View style={styles.tipContainer}>
                        <Text style={styles.tip}></Text>
                        <Text style={styles.tipin}></Text>
                    </View>
                </View>
            </View>
            <TextInput style={styles.textInput} placeholder="Type in English"
                placeholderTextColor="#C6C6C6"
                value={inputTextValue}
                onChangeText={(text: string) => onChange(text)}
            />
        </View>
    )
};

