import { IQuestion } from "./IQuestion";
import { IQuestionOpenEndedOption } from "./IQuestionOpenEndedOption";
import { IQuestionImageOption as IQuestionImageOption } from "./IQuestionImageOption";

export interface IImageQuestion extends IQuestion  {
    iconRootURl : string,
    options : Array<IQuestionImageOption>
}