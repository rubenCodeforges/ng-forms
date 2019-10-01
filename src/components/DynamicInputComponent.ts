import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {BaseInput} from '../inputs/base/BaseInput';


@Component({
    selector: 'ng-forms-input',
    templateUrl: 'dynamicInput.html',
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

    public onChange(): void {
        this.formChange.emit(this.form);
    }
}
