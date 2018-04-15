import {BaseInput} from "./base/BaseInput";
import {BaseInputParams} from "./base/BaseInputParams";
import {SelectOption} from "./SelectOption";

export class SelectInput extends BaseInput {
    public options: SelectOption[];

    constructor(name: string, options: SelectOption[], params?: BaseInputParams) {
        super(name, params);
        this.options = options;
        this.controlType = 'select';
    }
}
