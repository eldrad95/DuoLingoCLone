import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ICompleteSentenceQuestion } from "../../Interfaces/ICompleteSentenceQuestion";
import mascot from "../../../assets/mascot.png";
import { IChoiceTextQuestionOption } from "../../Interfaces/ICompleteSentenceQuestionOption";

interface ITranslateSentenceQuestionProps {
    question: ICompleteSentenceQuestion
    isCorrect: (value: boolean) => void
    hasValue: (value: boolean) => void
}


export const TranslateSentenceQuestion = (props: ITranslateSentenceQuestionProps) => {
    const {
        question,
        isCorrect,
        hasValue,
    } = props
    const [values, setValues] = useState<Array<{ id: number, value: string }>>([])
    const [isActive, setActive] = useState<number>(-1)
    const CorrectValues = useRef<Array<IChoiceTextQuestionOption>>();


    useEffect(() => {
        CorrectValues.current = question.options.filter(opt => opt.correct! > -1)

    }, [])

    const setAnswer = (inputValue: string) => {
        if (isActive > -1) {
            setValues([...values.filter(opt => opt.id != isActive), { id: isActive, value: inputValue }])
        }
    }

    const getPossibleAnswers = (input: Array<IChoiceTextQuestionOption>) => {
        return <FlatList
        data={input}
        keyExtractor={(item)=>(item.id)}
        contentContainerStyle={styles.optionsContainer}
        renderItem={(option)=> {
            const isOptionSelected = values.findIndex(opt => (opt.value === option.item.text)) > -1
            return(
                <Pressable disabled={isOptionSelected} onPress={() => setAnswer(option.item.text)}>
                <Text style={[styles.text, styles.option, isOptionSelected ? styles.selectedValue : null]}>{isOptionSelected ? "" : option.item.text}</Text>
            </Pressable>
            )
        }}
        />
    }
    useEffect(() => {
        isCorrect(((CorrectValues.current?.every(opt => values.find(val => val.id === opt.correct)?.value === opt.text)
            && values.every(val => CorrectValues.current?.find(opt => opt.correct === val.id)?.text === val.value)) ?? false))
        hasValue(CorrectValues.current?.length === values.length)
        setActive(isActive === (CorrectValues.current?.length! - 1) ? 0 : isActive + 1)
    }, [values])

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image source={mascot} style={styles.mascot} resizeMode='contain' />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.question}</Text>
                    <View style={styles.tipContainer}>
                        <Text style={styles.tip}></Text>
                        <Text style={styles.tipin}></Text>
                    </View>
                </View>
            </View>
            <FlatList
                contentContainerStyle={styles.answerContainer}
                data={values}
                keyExtractor={(value) => (value.id.toString())}
                renderItem={(value) => {
                    return (
                        <Pressable onLongPress={() => setValues([...values.filter(opt => opt.id != value.item.id)])} onPress={() => setActive(isActive === value.item.id ? -1 : value.item.id)}>
                            <Text style={[styles.text, styles.option, isActive === value.item.id && styles.activeCell]}>{values.find((opt) => opt.id === value.item.id)?.value}</Text>
                        </Pressable>)
                }
                } />
                {getPossibleAnswers(question.options)}
        </View>
    )
}