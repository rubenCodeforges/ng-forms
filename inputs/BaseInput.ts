import {FormControl, Validators} from "@angular/forms";
import {BaseInputParams} from "./BaseInputParams";

export class BaseInput<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: InputControlType;

    constructor(inputParams?: BaseInputParams) {
        this.key = inputParams.key;
        this.label = inputParams.label;
        this.required = inputParams.required;
        this.order = inputParams.order;
        this.controlType = inputParams.controlType;
    }

    public getFormControl(): FormControl {
        return this.required ? new FormControl(this.value || '', Validators.required)
            : new FormControl(this.value || '');
    }
}
