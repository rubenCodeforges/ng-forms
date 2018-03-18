import {BaseInput, InputControlType} from "./BaseInput";

export class SelectInput extends BaseInput<string> {
    public controlType: InputControlType = 'select';
}
