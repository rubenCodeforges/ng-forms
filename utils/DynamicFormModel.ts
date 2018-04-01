import {BaseInput} from "../inputs/BaseInput";
import * as _ from "lodash";
import {TextInput} from "../inputs/TextInput";
import {NgDynamicFormMetadataKeys} from "./NgDynamicFormMetadataKeys";
import {BaseInputFactory} from "../inputs/BaseInputFactory";
import {NgFormFieldMetadata} from "./FormFieldDecorator";

export abstract class DynamicFormModel {

    public getFormFields(): BaseInput[] {
        const inputs: BaseInput[] = [];

        _.forOwn(this, (value, key) => {
            const formFieldMetadata: NgFormFieldMetadata =
                Reflect.getMetadata(NgDynamicFormMetadataKeys.NG_FORM_FIELD, this, key);

            const baseInput: BaseInput = BaseInputFactory.build(
                formFieldMetadata.fieldType,
                formFieldMetadata.fieldName || key,
                formFieldMetadata.selectOptions
            );

            inputs.push(baseInput);
        });

        console.log(inputs);

        return <BaseInput[]> _.mapKeys(this, (value, key) => {
            if (typeof value === 'string') {
                return new TextInput('');
            } else if (typeof value === 'boolean') {
                return;
            }

            if (_.isArray(value)) {
                return;
            }
        });
    }
}
