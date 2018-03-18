import {Component, EventEmitter, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput} from "../inputs/BaseInput";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamicForm.html',
})
export class DynamicFormComponent implements OnInit {

    @Input() inputs: BaseInput<any>[] = [];
    public form: FormGroup;
    public submit: EventEmitter<any> = new EventEmitter<any>();


    ngOnInit() {
        const formGroup: { [key: string]: AbstractControl } = {};
        this.inputs.forEach(input => formGroup[input.key] = input.getFormControl());
        this.form = new FormGroup(formGroup);
    }

    onSubmit() {
        this.submit.emit(this.form.value);
    }
}
