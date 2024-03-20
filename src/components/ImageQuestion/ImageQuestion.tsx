import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { IQuestion } from "../../Interfaces/IQuestion";
import { IImageQuestion } from "../../Interfaces/IImageQuestion";
import { IQuestionImageOption } from "../../Interfaces/IQuestionImageOption";
// import { IQuestionImageOption  } from './src/Interfaces/IQuestionOption';
import { styles } from './style';
import { ImageOption } from "../ImageOption/ImageOption";
import Question from "../../../Questions";

interface ImageQuestionProps {
    selectedQuestion: IImageQuestion
    isCorrectanswer: (answer: boolean) => void,
    hasValue: (value: boolean) => void
}

export const ImageQuestion = (props: ImageQuestionProps) => {
    const [SelectedAnswerIds, setSelectedAnswerIds] = useState<Array<string>>([])
    const { selectedQuestion,
        isCorrectanswer,
        hasValue
    } = props
    const CorrectAnswers = selectedQuestion.options.filter(x => x.correct).map(x => x.id);

    const selectitem = (itemId: string) => {
        console.log("inSelectItem");
        let answers = SelectedAnswerIds
        if (SelectedAnswerIds.some(x => x === itemId))
            answers = SelectedAnswerIds.filter(x => x != itemId)
        else
            answers = [...SelectedAnswerIds, itemId]
        console.log("SelectedAnswerIds", answers)
        console.log("CorrectAnswers", CorrectAnswers)
        if (answers.every(selectedAnswerId => CorrectAnswers.findIndex(cAsnwerId => cAsnwerId === selectedAnswerId) > -1)
            && CorrectAnswers.every(cAnswerId => answers.findIndex(selectedAnswerId => selectedAnswerId === cAnswerId) > -1)) {
            isCorrectanswer(true);
        }
        else
            isCorrectanswer(false);
        setSelectedAnswerIds(answers)

    }

    useEffect(() => {
        hasValue(SelectedAnswerIds.length === CorrectAnswers.length ? true : false)
    }, [SelectedAnswerIds])

    useEffect(() => {
        setSelectedAnswerIds([]);
    }, [selectedQuestion]);
    return (
    <>
    {
        selectedQuestion.options.map((opt, index) => {

            const option = opt as IQuestionImageOption

            return (
                <ImageOption
                    key={index}
                    id={option.id}
                    text={option.text}
                    imageUri={`${selectedQuestion.iconRootURl}/${option.imageName}.png`}
                    disabled={
                        ((selectedQuestion as IImageQuestion).options.filter(it => it.correct === true).length == 1
                            && SelectedAnswerIds.length > 0 && SelectedAnswerIds.find(opt => opt === option.id) === undefined)

                    }
                    isSelected={(SelectedAnswerIds.some(x => x === option.id))}
                    onPress={selectitem}
                />
            )
        })
    }
    </>)
}