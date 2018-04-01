import {FormFieldType} from "./FormFieldType";
import {NgDynamicFormMetadataKeys} from "./NgDynamicFormMetadataKeys";
import {SelectOption} from "../inputs/SelectOption";


/**
 * Adds metadata to decorated Class field
 */
export function NgFormField(fieldType: FormFieldType,
                            fieldName?: string,
                            selectOptions?: SelectOption[]): (target: any, propertyKey: string) => void {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata(
            NgDynamicFormMetadataKeys.NG_FORM_FIELD,
            {
                fieldType: fieldType,
                fieldName: fieldName,
                selectOptions
            },
            target, propertyKey
        );
    };
}

export interface NgFormFieldMetadata {
    fieldType: FormFieldType;
    fieldName?: string;
    selectOptions?: SelectOption[];
}
