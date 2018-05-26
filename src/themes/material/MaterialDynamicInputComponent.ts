import {Component, ViewEncapsulation} from "@angular/core";
import {DynamicInputComponent} from "../../components/DynamicInputComponent";

@Component({
    selector: 'ng-forms-input-material',
    styleUrls: ['./ngFormsMaterial.scss'],
    templateUrl: './materialDynamicInput.html',
    encapsulation: ViewEncapsulation.None
})
export class MaterialDynamicInputComponent extends DynamicInputComponent {

}
