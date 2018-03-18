import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput} from "../inputs/BaseInput";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
    selector: 'app-dynamic-input',
    templateUrl: './dynamicInput.html'
})
export class DynamicInputComponent {
    @Input() input: BaseInput;
    @Input() form: FormGroup;
    @Output() formChange: EventEmitter<FormGroup> = new EventEmitter();

    public isValid(): boolean {
        return this.form.controls[this.input.name].valid;
    }

    public getFormControl(input): AbstractControl {
        return this.form.controls[input.name];
    }
}
