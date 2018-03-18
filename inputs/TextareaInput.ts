import {BaseInput, InputControlType} from "./BaseInput";

export class TextareaInput extends BaseInput<string> {
    public controlType: InputControlType = 'textarea';
}
