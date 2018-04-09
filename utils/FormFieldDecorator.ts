import {FormFieldType} from "./FormFieldType";
import {NgDynamicFormMetadataKeys} from "./NgDynamicFormMetadataKeys";
import {LabelValueKeysNotDefinedException} from "../exceptions/LabelValueKeysNotDefinedException";


/**
 * Adds metadata to decorated Class field
 */
export function NgFormField(options: NgFormFieldOptions): (target: any, propertyKey: string) => void {

    if (hasNoRequiredFields(options)) {
        throw new LabelValueKeysNotDefinedException();
    }

    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(
            NgDynamicFormMetadataKeys.NG_FORM_FIELD,
            options,
            target,
            propertyKey
        );
    };
}

function hasNoRequiredFields(options: NgFormFieldOptions) {
    return options.fieldType === FormFieldType.SELECT && !options.selectOptionKeys
        || options.fieldType === FormFieldType.RADIO && !options.selectOptionKeys;
}

export interface NgFormFieldOptions {
    fieldType: FormFieldType;
    fieldName?: string;
    selectOptionKeys?: { labelKey: string, valueKey: string };
    validator?: any;
}
