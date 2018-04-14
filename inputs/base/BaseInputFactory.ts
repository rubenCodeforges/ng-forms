import {BaseInput} from "./BaseInput";
import {TextInput} from "../TextInput";
import {BaseInputParams} from "./BaseInputParams";
import {TextAreaInput} from "../TextAreaInput";
import {SelectInput} from "../SelectInput";
import {CheckboxInput} from "../CheckboxInput";
import {RadioInput} from "../RadioInput";

export class BaseInputFactory {
    public static build(className: string,
                        fieldName: string,
                        params?: BaseInputParams): BaseInput {
        switch (className) {
            case TextInput.name :
                return new TextInput(fieldName, params);
            case CheckboxInput.name :
                return new CheckboxInput(fieldName, params);
            case TextAreaInput.name :
                return new TextAreaInput(fieldName, params);
            case SelectInput.name :
                return new SelectInput(fieldName, params.selectOptions, params);
            case RadioInput.name :
                return new RadioInput(fieldName, params.selectOptions, params);
        }
    }
}
