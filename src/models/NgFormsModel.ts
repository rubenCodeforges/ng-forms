import {BaseInput} from "../inputs/base/BaseInput";
import * as _ from "lodash";
import {NgFormsMetadataKeys} from "../decorators/NgFormsMetadataKeys";
import {BaseInputFactory} from "../inputs/base/BaseInputFactory";
import {FormFieldType} from "./FormFieldType";
import {SelectOption} from "../inputs/SelectOption";
import {NgFormFieldOptions} from "../decorators/NgFormFieldOptions";
import {BaseInputParams} from "../inputs/base/BaseInputParams";

export abstract class NgFormsModel {

    public getFormFields(): BaseInput[] {
        const inputs: BaseInput[] = [];

        _.forOwn(this, (value, propertyKey: string) => {
            const formFieldOptions: NgFormFieldOptions = this.getNgFormFieldMetadata(propertyKey);
            const required: boolean = this.getNgFormRequiredMetadata(propertyKey);

            if (formFieldOptions) {
                this.setInputName(formFieldOptions, propertyKey);
                const selectOptions: SelectOption[] = this.buildSelectOptions(formFieldOptions, value);

                inputs.push(this.buildBaseInput(formFieldOptions, value, selectOptions, required));
            }
        });
        return inputs;
    }


    private buildBaseInput(formFieldOptions: NgFormFieldOptions,
                           value: string,
                           selectOptions: SelectOption[],
                           required: boolean = false) {

        const params: BaseInputParams = this.buildBaseInputParams(formFieldOptions, selectOptions, value, required);

        return BaseInputFactory.build(
            formFieldOptions.fieldType,
            formFieldOptions.fieldName,
            params
        );
    }


    private hasSelectOptions(formFieldOptions: NgFormFieldOptions) {
        return formFieldOptions.fieldType === FormFieldType.SELECT
            || formFieldOptions.fieldType === FormFieldType.RADIO;
    }

    private buildSelectOptions(formFieldOptions: NgFormFieldOptions, value) {
        let selectOptions: SelectOption[];

        if (this.hasSelectOptions(formFieldOptions)) {
            selectOptions = _.map(value, (element) => {
                return new SelectOption(
                    element[formFieldOptions.selectOptionKeys.labelKey],
                    element[formFieldOptions.selectOptionKeys.valueKey]
                );
            });
        }
        return selectOptions;
    }

    private buildBaseInputParams(formFieldOptions: NgFormFieldOptions,
                                 selectOptions: SelectOption[],
                                 value: string,
                                 required: boolean): BaseInputParams {
        const params: BaseInputParams = this.hasSelectOptions(formFieldOptions) ?
            {selectOptions: selectOptions} : {value: value};

        params.required = required;
        params.disabled = formFieldOptions.disabled;
        params.placeholder = formFieldOptions.placeholder;
        return params;
    }

    private setInputName(formFieldOptions: NgFormFieldOptions, propertyKey: string) {
        formFieldOptions.fieldName = formFieldOptions.fieldName || propertyKey;
    }

    private getNgFormRequiredMetadata(propertyKey: string): boolean {
        return Reflect.getMetadata(NgFormsMetadataKeys.NG_FORM_FIELD_REQUIRED, this, propertyKey);
    }

    private getNgFormFieldMetadata(propertyKey: string): NgFormFieldOptions {
        return Reflect.getMetadata(NgFormsMetadataKeys.NG_FORM_FIELD, this, propertyKey);
    }
}
