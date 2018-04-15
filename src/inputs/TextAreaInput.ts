import {BaseInput} from "./base/BaseInput";
import {BaseInputParams} from "./base/BaseInputParams";

export class TextAreaInput extends BaseInput {

    constructor(name: string, inputParams: BaseInputParams) {
        super(name, inputParams);
        this.controlType = 'textarea';
    }
}
