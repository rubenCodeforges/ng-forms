import {NgModule} from "@angular/core";
import {DynamicFormComponent} from "./components/DynamicFormComponent";
import {DynamicInputComponent} from "./components/DynamicInputComponent";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DynamicFormThemeModule} from "./themes/DynamicFormThemeModule";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        TranslateModule,
        DynamicFormThemeModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicInputComponent
    ],
    exports: [
        DynamicFormThemeModule,
        DynamicFormComponent,
        DynamicInputComponent
    ]
})
export class NgDynamicForm {

}

