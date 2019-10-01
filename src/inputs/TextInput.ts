import {BaseInput} from './base/BaseInput';
import {BaseInputParams} from './base/BaseInputParams';

export class TextInput extends BaseInput {
    constructor(name: string, inputParams?: BaseInputParams) {
        super(name, inputParams);
        this.controlType = 'text';
    }
}
