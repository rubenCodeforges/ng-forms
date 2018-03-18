import {Component} from "@angular/core";
import {DynamicInputComponent} from "../../components/DynamicInputComponent";

@Component({
    selector: 'app-dynamic-input-material',
    templateUrl: './materialDynamicInput.html'
})
export class MaterialDynamicInputComponent extends DynamicInputComponent {
    public onChange(): void {
        this.formChange.emit(this.form);
    }
}
