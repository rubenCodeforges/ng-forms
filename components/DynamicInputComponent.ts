import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput} from "../inputs/BaseInput";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
    selector: 'app-dynamic-input',
    templateUrl: './dynamicInput.html'
})
export class DynamicInputComponent implements OnInit {
    @Input() input: BaseInput;
    @Input() form: FormGroup;
    @Output() formChange: EventEmitter<FormGroup> = new EventEmitter();


    ngOnInit(): void {
    }

    public isValid(): boolean {
        return this.form.controls[this.input.name].valid;
    }

    public getFormControl(input): AbstractControl {
        return this.form.controls[input.name];
    }
}
