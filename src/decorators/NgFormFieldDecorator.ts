import {FormFieldType} from "../models/FormFieldType";
import {NgFormsMetadataKeys} from "./NgFormsMetadataKeys";
import {LabelValueKeysNotDefinedException} from "../exceptions/LabelValueKeysNotDefinedException";
import {NgFormFieldOptions} from "./NgFormFieldOptions";


/**
 * Adds metadata to decorated Class field
 */
export function NgFormField(options: NgFormFieldOptions): (target: any, propertyKey: string) => void {

    if (hasNoRequiredFields(options)) {
        throw new LabelValueKeysNotDefinedException();
    }

    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(
            NgFormsMetadataKeys.NG_FORM_FIELD,
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
