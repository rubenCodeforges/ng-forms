import {BaseInput} from './base/BaseInput';
import {BaseInputParams} from './base/BaseInputParams';

export class CheckboxInput extends BaseInput {
    constructor(name: string, inputParams?: BaseInputParams) {
        super(name, inputParams);
        this.controlType = 'checkbox';
    }
}
