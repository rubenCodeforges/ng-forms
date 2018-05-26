import {FormFieldType} from "../models/FormFieldType";

export interface NgFormFieldOptions {
    fieldType: FormFieldType;
    fieldName?: string;
    disabled?: boolean;
    placeholder?: string;
    selectOptionKeys?: { labelKey: string, valueKey: string };
    validator?: any;
}
