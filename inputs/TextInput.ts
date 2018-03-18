import {BaseInput, InputControlType} from "./BaseInput";

export class TextInput extends BaseInput<string> {
    public controlType: InputControlType = 'text';

}
