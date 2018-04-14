import {BaseInput} from "../inputs/base/BaseInput";
import * as _ from "lodash";
import {NgFormsMetadataKeys} from "../utils/decorators/NgFormsMetadataKeys";
import {BaseInputFactory} from "../inputs/base/BaseInputFactory";
import {NgFormFieldOptions} from "../utils/decorators/NgFormFieldDecorator";
import {FormFieldType} from "../utils/FormFieldType";
import {SelectOption} from "../inputs/SelectOption";

export abstract class NgDynamicFormsModel {
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
        return Reflect.getMetadata(NgFormsMetadataKeys.NG_FORM_FIELD, this, propertyKey);
    }
}
