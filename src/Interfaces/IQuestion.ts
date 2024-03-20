import { IQuestionOpenEndedOption } from "./IQuestionOpenEndedOption";
import { IQuestionImageOption } from "./IQuestionImageOption";
import { IChoiceTextQuestionOption } from "./ICompleteSentenceQuestionOption";

export interface IQuestion  {
    id : string,
    question: string,
    options : Array<IQuestionImageOption | IQuestionOpenEndedOption| IChoiceTextQuestionOption>
    type : "Image" | "Open_Ended" | "Complete_Text" | "Translate_Text"
}