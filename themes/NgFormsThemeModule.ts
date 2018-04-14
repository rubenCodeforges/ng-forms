import {NgModule} from "@angular/core";
import {MaterialDynamicInputComponent} from "./material/MaterialDynamicInputComponent";
import {MaterialDynamicFormComponent} from "./material/MaterialDynamicFormComponent";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
} from "@angular/material";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        TranslateModule,
        MatInputModule
    ],
    declarations: [
        MaterialDynamicInputComponent,
        MaterialDynamicFormComponent,
    ],
    exports: [
        MaterialDynamicFormComponent,
        MaterialDynamicInputComponent
    ]
})
export class NgFormsThemeModule {
}
