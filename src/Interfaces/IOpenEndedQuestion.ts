import { IQuestion } from "./IQuestion";
import { IQuestionOpenEndedOption } from "./IQuestionOpenEndedOption";
import { IQuestionImageOption as IQuestionImageOption } from "./IQuestionImageOption";

export interface IOpenEndedQuestion extends IQuestion  {
    options : Array<IQuestionOpenEndedOption>
}