import {FormControl, Validators} from "@angular/forms";
import {BaseInputParams} from "./BaseInputParams";
import {InputControlType} from "./InputControlType";

export class BaseInput<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;
    order: number;
    controlType: InputControlType;

    constructor(name: string, inputParams?: BaseInputParams) {
        this.name = name;

        if (inputParams) {
            this.label = inputParams.label;
            this.required = inputParams.required;
            this.order = inputParams.order;
            this.controlType = inputParams.controlType;
        }
    }

    public getFormControl(): FormControl {
        return this.required ? new FormControl(this.value || '', Validators.required)
            : new FormControl(this.value || '');
    }
}
