import {FormControl, Validators} from "@angular/forms";

export declare type InputControlType = 'text' | 'textarea' | 'select' ;

export class BaseInput<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: InputControlType;

    constructor(value?: T,
                key?: string,
                label?: string,
                required?: boolean,
                order?: number,
                controlType?: InputControlType) {
        this.value = value;
        this.key = key;
        this.label = label;
        this.required = required;
        this.order = order;
        this.controlType = controlType;
    }

    public getFormControl(): FormControl {
        return this.required ? new FormControl(this.value || '', Validators.required)
            : new FormControl(this.value || '');
    }
}
