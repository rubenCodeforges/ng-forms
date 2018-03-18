import {BaseInput} from "./BaseInput";
import {InputControlType} from "./InputControlType";

export class TextInput extends BaseInput<string> {
    public controlType: InputControlType = 'text';
}
