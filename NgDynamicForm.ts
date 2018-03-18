import {NgModule} from "@angular/core";
import {DynamicFormComponent} from "./components/DynamicFormComponent";
import {DynamicInputComponent} from "./components/DynamicInputComponent";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicInputComponent
    ],
    exports: [
        DynamicFormComponent,
        DynamicInputComponent
    ]
})
export class NgDynamicForm {

}
