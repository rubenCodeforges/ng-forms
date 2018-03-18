import {FormControl, Validators} from "@angular/forms";
import {BaseInputParams} from "./BaseInputParams";
import {InputControlType} from "./InputControlType";

export class BaseInput {
    public value: any;
    public name: string;
    public label: string;
    public required: boolean;
    public order: number;
    public controlType: InputControlType;
    private formControl: FormControl;

    constructor(name: string, inputParams?: BaseInputParams) {
        this.name = name;
        if (inputParams) {
            this.label = inputParams.label;
            this.required = inputParams.required;
            this.order = inputParams.order;
            this.controlType = inputParams.controlType;
        }

        this.formControl = this.buildFormControl();
    }

    public getFormControl(): FormControl {
        return this.formControl;
    }

    private buildFormControl(): FormControl {
        return this.required ? new FormControl(this.value || '', Validators.required)
            : new FormControl(this.value || '');
    }
}
