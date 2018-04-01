import {BaseInput} from "./BaseInput";
import {TextInput} from "./TextInput";
import {BaseInputParams} from "./BaseInputParams";
import {TextAreaInput} from "./TextAreaInput";
import {SelectInput} from "./SelectInput";
import {SelectOption} from "./SelectOption";

export class BaseInputFactory {
    public static build(className: string,
                        fieldName: string,
                        selectOptions?: SelectOption[],
                        params?: BaseInputParams): BaseInput {

        switch (className) {
            case TextInput.name :
                return new TextInput(fieldName, params);
            case TextAreaInput.name :
                return new TextAreaInput(fieldName, params);
            case SelectInput.name :
                return new SelectInput(fieldName, selectOptions, params);
        }
    }
}
