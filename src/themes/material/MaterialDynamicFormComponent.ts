import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {DynamicFormComponent} from "../../components/DynamicFormComponent";

@Component({
    selector: 'ng-forms-material',
    templateUrl: './materialDynamicForm.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./ngFormsMaterial.scss']
})
export class MaterialDynamicFormComponent extends DynamicFormComponent {

}
