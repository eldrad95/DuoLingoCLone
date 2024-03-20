import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { styles } from "./app.styles";
import questions from "./Questions"
import { useEffect, useRef, useState } from 'react';
import { Button } from './src/components/Button/Button';
import { IQuestion } from './src/Interfaces/IQuestion';
import Questions from './Questions';
import { OpenEndedQuestion } from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import { IImageQuestion } from './src/Interfaces/IImageQuestion';
import { ImageQuestion } from './src/components/ImageQuestion/ImageQuestion';
import { IQuestionImageOption } from './src/Interfaces/IQuestionImageOption';
import { IOpenEndedQuestion } from './src/Interfaces/IOpenEndedQuestion';
import { Header } from './src/components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CompleteSentenceQuestion } from './src/components/CompleteSentenceQuestion/CompleteSentenceQuestion';
import { ICompleteSentenceQuestion } from './src/Interfaces/ICompleteSentenceQuestion';
import { TranslateSentenceQuestion } from './src/components/TranslateSentenceQuestion/TranslateSentenceQuestion';
// import {asyn}

export default function App() {

  const [SelectedAnswerIds, setSelectedAnswerIds] = useState<Array<string>>([])
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0)
  const selectedQuestion = (Questions as Array<IQuestion>)[selectedQuestionIndex]
  const isAnswerCorrect = useRef<boolean>(false)
  const [lives, setLives] = useState<number>(5);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  // const question = questions[selectedQuestion]
  // const selectitem = (itemId: string) => {
  //   console.log(itemId)
  //   const selectedOption = (selectedQuestion as IImageQuestion).options.find(it => it.id === itemId) as IQuestionImageOption
  //   if (SelectedAnswerIds.some(x => x === itemId))
  //     setSelectedAnswerIds(SelectedAnswerIds.filter(x => x != itemId))
  //   else
  //     setSelectedAnswerIds([...SelectedAnswerIds, itemId])

  //   // setSelectedAnswer(SelectedAnswers?.id === selectedOption.id ? null : selectedOption)
  // }

  const onOptionSelectionChange = (isCorrect: boolean) => {
    console.log("isCorrect", isCorrect)
    isAnswerCorrect.current = isCorrect
  }

  const restart = () => {
    setLives(5);
    setSelectedQuestionIndex(0)
  }

  const onSuccess = () => {
    Alert.alert("Good");
    isAnswerCorrect.current = false;
    setSelectedQuestionIndex(selectedQuestionIndex === questions.length - 1 ? 0 : selectedQuestionIndex + 1);
  }

  const onFaillure = () => {
    if (lives > 0) {
      Alert.alert("wrong");
      setLives(lives - 1);
    }
    else {
      Alert.alert("Game Over", "try again", [{
        text: "Try again",
        onPress: restart
      }]);
    }
  }


  const onValidateForm = () => {
    console.log(`validating ${SelectedAnswerIds}`)
    const givenAswers = new Set(SelectedAnswerIds)
    if (isAnswerCorrect.current) {
      onSuccess();
    }
    else {
      onFaillure();
    }
  }

  useEffect(() => {
    setSelectedAnswerIds([])
  }, [selectedQuestionIndex])

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('lives', lives.toString());
    }
    catch (exception) {
      Alert.alert("Error Saving Lives, see console Log")
      console.log("exception saving Lives", exception);
    }
    try {
      await AsyncStorage.setItem('selectedQuestionIndex', selectedQuestionIndex.toString());
    }
    catch (exception) {
      Alert.alert("Error Saving selectedQuestionIndex, see console Log")
      console.log("exception saving selectedQuestionIndex", exception);
    }

  }

  const loadData = async () => {
    try {
      const loadedLives = await AsyncStorage.getItem("lives")
      if (loadedLives)
        setLives(Number.parseInt(loadedLives))
    }
    catch (exception) {
      Alert.alert("Error Saving Lives, see console Log")
      console.log("exception loading Lives", exception);
    }
    try {
      const loadedselectedQuestionIndex = await AsyncStorage.getItem("selectedQuestionIndex")
      if (loadedselectedQuestionIndex)
        setSelectedQuestionIndex(Number.parseInt(loadedselectedQuestionIndex))
    }
    catch (exception) {
      Alert.alert("Error Saving selectedQuestionIndex, see console Log")
      console.log("exception loading selectedQuestionIndex", exception);
    }
  }

  useEffect(() => {
    if (hasLoaded)
      saveData();
  }, [lives, selectedQuestionIndex, hasLoaded])

  useEffect(() => {
    loadData();
    setHasLoaded(true);
  }, [])

  if (!hasLoaded) {
    return (
      <ActivityIndicator style={styles.loadingIndicator} size="large" />)
  }


  return (
    <View style={styles.root}>
      <Header progress={Questions.indexOf(selectedQuestion) / questions.length} lives={lives} />
      {selectedQuestion.type === "Image" &&
        <>
          <Text style={styles.title}>{selectedQuestion.question}</Text>
          <View style={styles.optionsContainer}>
            <ImageQuestion selectedQuestion={selectedQuestion as IImageQuestion} hasValue={(value: boolean) => setHasValue(value)} isCorrectanswer={(value: boolean) => onOptionSelectionChange(value)} />
          </View>
        </>
      }
      {selectedQuestion.type === "Open_Ended" &&
        <>
          <Text style={styles.title}>Translate this sentence</Text>
          <View style={styles.optionsContainer}>
            <OpenEndedQuestion hasValue={(value: boolean) => setHasValue(value)} onChangeText={(value: boolean) => onOptionSelectionChange(value)}
              sentence={selectedQuestion.question}
              answers={(selectedQuestion as IOpenEndedQuestion).options} />
          </View>
        </>
      }
      {selectedQuestion.type === "Complete_Text" &&
        <>
          <Text style={styles.title}>Complete this sentence</Text>
          <View style={styles.optionsContainer}>
            <CompleteSentenceQuestion question={selectedQuestion as ICompleteSentenceQuestion} hasValue={(value: boolean) => setHasValue(value)} isCorrect={(value:boolean) => onOptionSelectionChange(value)}/>
          </View>
        </>
      }
      {selectedQuestion.type === "Translate_Text" &&
        <>
          <Text style={styles.title}>Complete this sentence</Text>
          <View style={styles.optionsContainer}>
            <TranslateSentenceQuestion question={selectedQuestion as ICompleteSentenceQuestion} hasValue={(value: boolean) => setHasValue(value)} isCorrect={(value:boolean) => onOptionSelectionChange(value)}/>
          </View>
        </>
      }
      <Button text="press" disabled={!hasValue} onPress={onValidateForm} />
    </View>
  );
}

