import React from "react";
import { IQuestion } from "./src/Interfaces/IQuestion";
import { ICompleteSentenceQuestion } from "./src/Interfaces/ICompleteSentenceQuestion";
import { IOpenEndedQuestion } from "./src/Interfaces/IOpenEndedQuestion";
import { ITranslateSentenceQuestion } from "./src/Interfaces/ITranslateSentenceQuestion";
const Question : Array<IQuestion | ICompleteSentenceQuestion | IOpenEndedQuestion | ITranslateSentenceQuestion> = [
    {
        id: "q0",
        question: 'El hombre',
        iconRootURl: "../../../assets",
        imageName: "motherbig",
        type: "Translate_Text",
        options: [
            {
                id: "option1",
                text: "a",
            },
            {
                id: "option2",
                text: "the",
                correct : 0
            },
            {
                id: "option3",
                text: "boy",
                correct : 1
            },
            {
                id: "option4",
                text: "girl",
            },
        ]
    },
    {
        id: "q1",
        question: 'Which of these is "the glass" ?',
        iconRootURl: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images",
        type: "Image",
        options: [
            {
                id: "option1",
                text: "la taza",
                imageName: "cup"
            },
            {
                id: "option2",
                text: "el vaso",
                imageName: "glass",
                correct: true
            },
            {
                id: "option3",
                text: "la leche",
                imageName: "milk"
            },
            {
                id: "option4",
                text: "el café",
                imageName: "coffee"
            },
        ]
    },
    {
        id: "q2",
        question: 'Which of these is "the glass" ?#2',
        iconRootURl: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images",
        type: "Image",
        options: [
            {
                id: "option1",
                text: "la taza (correct)",
                imageName: "cup",
                correct: true

            },
            {
                id: "option2",
                text: "el vaso (correct)",
                imageName: "glass",
                correct: true
            },
            {
                id: "option3",
                text: "la leche",
                imageName: "milk"
            },
            {
                id: "option4",
                text: "el café",
                imageName: "coffee"
            },
        ]
    },
    {
        id: "q3",
        question: 'una {0}, una {1}',
        iconRootURl: "../../../assets",
        imageName: "motherbig",
        type: "Complete_Text",
        options: [
            {
                id: "option1",
                text: "yo",
            },
            {
                id: "option2",
                text: "el",
            },
            {
                id: "option3",
                text: "mujer",
                correct : 1
            },
            {
                id: "option4",
                text: "niña",
                correct : 0
            },
        ]
    },
    {
        id: "q4",
        question: 'Yo soy un hombre',
        iconRootURl: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images",
        type: "Open_Ended",
        options: [
            {
                text: "I am a man"
            }
        ]
    },
    {
        id: "q5",
        question: 'me gusta React Native',
        iconRootURl: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images",
        type: "Open_Ended",
        options: [
            {
                text: "I like react native"
            }
        ]
    },
]

export default Question