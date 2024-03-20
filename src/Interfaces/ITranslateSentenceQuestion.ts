import { IChoiceTextQuestionOption } from "./ICompleteSentenceQuestionOption";
import { IQuestion } from "./IQuestion";

export interface ITranslateSentenceQuestion extends IQuestion {
    options : Array<IChoiceTextQuestionOption>
    imageName : string
}