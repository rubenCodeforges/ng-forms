import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput, InputControlType} from "../inputs/BaseInput";

@Component({
    selector: 'app-dynamic-input',
    templateUrl: './dynamicInput.html'
})
export class DynamicInputComponent {
    @Input() input: BaseInput<InputControlType>;
    @Input() form: FormGroup;

    public isValid(): boolean {
        return this.form.controls[this.input.key].valid;
    }
}
