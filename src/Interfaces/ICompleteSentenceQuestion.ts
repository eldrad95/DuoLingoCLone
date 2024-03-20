import { IChoiceTextQuestionOption } from "./ICompleteSentenceQuestionOption";
import { IQuestion } from "./IQuestion";

export interface ICompleteSentenceQuestion extends IQuestion {
    iconRootURl : string,
    options : Array<IChoiceTextQuestionOption>
    imageName : string
}