import React, { useEffect, useRef, useState } from "react";
import { styles } from "./styles";
import { Text, Image, Pressable, View, Button } from 'react-native';
import mother from '../../../assets/motherbig.png'
import { ICompleteSentenceQuestion } from "../../Interfaces/ICompleteSentenceQuestion";
import { IChoiceTextQuestionOption } from "../../Interfaces/ICompleteSentenceQuestionOption";

interface ICompleteSentenceQuestionProps {
    question: ICompleteSentenceQuestion
    isCorrect: (value: boolean) => void
    hasValue: (value: boolean) => void
}


export const CompleteSentenceQuestion = (props: ICompleteSentenceQuestionProps) => {
    const {
        question,
        isCorrect,
        hasValue,
    } = props
    const [values, setValues] = useState<Array<{ id: number, value: string }>>([])
    const [isActive, setActive] = useState<number>(-1)
    const CorrectValues = useRef<Array<IChoiceTextQuestionOption>>();

    useEffect(() => {
        CorrectValues.current = question.options.filter(opt =>  opt.correct! > -1)
        
    },[])

    const setAnswer = (inputValue: string) => {
        if (isActive > -1) {
            setValues([...values.filter(opt => opt.id != isActive), { id: isActive, value: inputValue }])
        }
    }
    
    useEffect(() => {
        isCorrect(((CorrectValues.current?.every(opt => values.find(val => val.id === opt.correct)?.value === opt.text)
        && values.every(val => CorrectValues.current?.find(opt => opt.correct === val.id)?.text === val.value)) ?? false))
        hasValue(CorrectValues.current?.length === values.length)
        setActive(isActive ===( CorrectValues.current?.length! -1 ) ? 0 : isActive + 1)
    },[values])
    
    const getText = (inputText: string) => {
        const regex = new RegExp("\\{\\d+\\}");
        return inputText.match(/{(\d+)}|\S.*?(?=\s*(?:{(\d+)}|$))/g)?.map((text, index) => {
            if (regex.test(text)) {
                const num = text.match(/\d/)?.map(Number)?.shift() ?? -1
                if (num > -1)
                    return (
                        <Pressable onLongPress={() => setValues([...values.filter(opt => opt.id != num)])} onPress={() => setActive(isActive === num ? -1 : num)}>
                            <Text style={[styles.text, styles.option, styles.answer, isActive === num && styles.activeCell]}>{values.find((opt) => opt.id === num)?.value}</Text>
                        </Pressable>)
            }
            else {
                return (
                    <Text style={[styles.sentence, styles.text]}>{text}</Text>
                )

            }
        })

    }

    const getPossibleAnswers = (input: Array<IChoiceTextQuestionOption>) => {
        return input.map((option) => {
            const isOptionSelected = values.findIndex(opt => (opt.value === option.text)) > -1
            return (
                <Pressable disabled={isOptionSelected} onPress={() => setAnswer(option.text)}>
                    <Text style={[styles.text, styles.option, isOptionSelected ? styles.selectedValue : null]}>{isOptionSelected ? "" :  option.text}</Text>
                </Pressable>
            )
        })

    }

    return (
        <View style={styles.root}>
            <View>
                <Image style={styles.image} source={mother} resizeMode="contain" />
                <View style={styles.sentenceContainer}>
                    {getText(question.question)}
                </View>
            </View>
            <View style={styles.optionsContainer}>
                {getPossibleAnswers(question.options)}
            </View>
            <Text style={styles.help}>Long Press on sentence chosen value empty it</Text>
        </View>
    )
}