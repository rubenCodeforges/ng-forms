import {Component} from "@angular/core";
import {DynamicInputComponent} from "../../components/DynamicInputComponent";

@Component({
    selector: 'ng-forms-input-material',
    templateUrl: './materialDynamicInput.html'
})
export class MaterialDynamicInputComponent extends DynamicInputComponent {
    public onChange(): void {
        this.formChange.emit(this.form);
    }
}
