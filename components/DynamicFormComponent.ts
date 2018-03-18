import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseInput} from "../inputs/BaseInput";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamicForm.html'
})
export class DynamicFormComponent implements OnInit {

    @Input() inputs: BaseInput[] = [];
    @Input() submitLabel = 'Submit';
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    public form: FormGroup;

    public ngOnInit() {
        this.buildForm();
    }

    public onSubmit() {
        this.submit.emit(this.form.value);
    }

    private buildForm() {
        const formGroup: { [key: string]: AbstractControl } = {};
        this.inputs.forEach(input => formGroup[input.name] = input.getFormControl());
        this.form = new FormGroup(formGroup);
    }
}
