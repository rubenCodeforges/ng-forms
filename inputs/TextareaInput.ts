import {BaseInput} from "./BaseInput";
import {InputControlType} from "./InputControlType";

export class TextareaInput extends BaseInput<string> {
    public controlType: InputControlType = 'textarea';
}
