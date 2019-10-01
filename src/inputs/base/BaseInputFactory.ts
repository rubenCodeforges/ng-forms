import {BaseInput} from './BaseInput';
import {TextInput} from '../TextInput';
import {BaseInputParams} from './BaseInputParams';
import {TextAreaInput} from '../TextAreaInput';
import {SelectInput} from '../SelectInput';
import {CheckboxInput} from '../CheckboxInput';
import {RadioInput} from '../RadioInput';
import {InputTypes} from './InputTypes';

export class BaseInputFactory {
    public static build(fieldType: string,
                        fieldName: string,
                        params?: BaseInputParams): BaseInput {
        switch (fieldType) {
            case InputTypes.TextInput :
                return new TextInput(fieldName, params);
            case InputTypes.CheckboxInput :
                return new CheckboxInput(fieldName, params);
            case InputTypes.TextAreaInput :
                return new TextAreaInput(fieldName, params);
            case InputTypes.SelectInput :
                return new SelectInput(fieldName, params.selectOptions, params);
            case InputTypes.RadioInput :
                return new RadioInput(fieldName, params.selectOptions, params);
        }
    }
}
