import {NgDynamicFormsModel} from "../src/models/NgDynamicFormsModel";
import {NgFormField} from "../src/utils/decorators/NgFormFieldDecorator";
import {FormFieldType} from "../src/utils/FormFieldType";

export class BookModel extends NgDynamicFormsModel {
    private uuid: string;

    @NgFormField({fieldType: FormFieldType.TEXT})
    private name: string;

    @NgFormField({fieldType: FormFieldType.TEXT_AREA})
    private description: string;

    @NgFormField({
        fieldType: FormFieldType.SELECT,
        selectOptionKeys: {labelKey: 'name', valueKey: 'id'}
    })
    private authors: { id: string, name: string }[];

    @NgFormField({
        fieldType: FormFieldType.CHECKBOX
    })
    private isActive: boolean;

    @NgFormField({
        fieldType: FormFieldType.RADIO,
        selectOptionKeys: {labelKey: 'catName', valueKey: 'catId'}
    })
    private activeCategory: { catId: string, catName: string }[];

    constructor(name: string,
                description: string,
                authors: { id: string; name: string }[],
                isActive: boolean,
                activeCategory: { catId: string, catName: string }[]) {
        super();
        this.name = name;
        this.description = description;
        this.authors = authors;
        this.isActive = isActive;
        this.activeCategory = activeCategory;
    }
}
