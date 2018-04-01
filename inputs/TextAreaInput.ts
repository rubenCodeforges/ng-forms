import {BaseInput} from "./BaseInput";
import {BaseInputParams} from "./BaseInputParams";

export class TextAreaInput extends BaseInput {

    constructor(name: string, inputParams: BaseInputParams) {
        super(name, inputParams);
        this.controlType = 'textarea';
    }
}
