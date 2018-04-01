import {DynamicFormModel} from "../utils/DynamicFormModel";
import {NgFormField} from "../utils/FormFieldDecorator";
import {FormFieldType} from "../utils/FormFieldType";

export class BookModel extends DynamicFormModel {
    private uuid: string;

    @NgFormField(FormFieldType.TEXT)
    private name: string;

    @NgFormField(FormFieldType.TEXT_AREA)
    private description: string;
}
