import {BaseInput} from "../inputs/BaseInput";
import * as _ from "lodash";
import {NgDynamicFormMetadataKeys} from "./NgDynamicFormMetadataKeys";
import {BaseInputFactory} from "../inputs/BaseInputFactory";
import {NgFormFieldOptions} from "./FormFieldDecorator";
import {FormFieldType} from "./FormFieldType";
import {SelectOption} from "../inputs/SelectOption";

export abstract class DynamicFormModel {
    private inputs: BaseInput[] = [];

    public getFormFields(): BaseInput[] {
        if (_.isEmpty(this.inputs)) {
            _.forOwn(this, (value, propertyKey: string) => {
                const formFieldOptions: NgFormFieldOptions = this.getNgFormFieldMetadata(propertyKey);

                if (formFieldOptions) {
                    formFieldOptions.fieldName = formFieldOptions.fieldName || propertyKey;
                    const selectOptions: SelectOption[] = this.buildSelectOptions(formFieldOptions, value);
                    this.inputs.push(this.buildBaseInput(formFieldOptions, value, selectOptions));
                }
            });
        }
        return this.inputs;
    }

    private buildBaseInput(formFieldOptions: NgFormFieldOptions,
                           value: string,
                           selectOptions: SelectOption[]) {

        const params = this.hasSelectOptions(formFieldOptions) ?
            {selectOptions: selectOptions} : {value: value};

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

    private getNgFormFieldMetadata(propertyKey: string): NgFormFieldOptions {
        return Reflect.getMetadata(NgDynamicFormMetadataKeys.NG_FORM_FIELD, this, propertyKey);
    }
}
