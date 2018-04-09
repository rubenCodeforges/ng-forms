import {BaseInput} from "./BaseInput";
import {BaseInputParams} from "./BaseInputParams";

export class CheckboxInput extends BaseInput {
    constructor(name: string, inputParams?: BaseInputParams) {
        super(name, inputParams);
        this.controlType = "checkbox";
    }
}
