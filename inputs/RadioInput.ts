import {BaseInputParams} from "./BaseInputParams";
import {SelectOption} from "./SelectOption";
import {SelectInput} from "./SelectInput";

export class RadioInput extends SelectInput {

    constructor(name: string, options: SelectOption[], params?: BaseInputParams) {
        super(name, options, params);
        this.options = options;
        this.controlType = 'radio';
    }
}
