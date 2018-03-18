import {BaseInput} from "./BaseInput";
import {BaseInputParams} from "./BaseInputParams";
import {InputControlType} from "./InputControlType";
import {SelectOption} from "./SelectOption";

export class SelectInput extends BaseInput<string> {
    public controlType: InputControlType = 'select';
    public options: SelectOption[];

    constructor(name: string, options: SelectOption[], params?: BaseInputParams) {
        super(name, params);
        this.options = options;
    }
}
