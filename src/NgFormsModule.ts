import {NgModule} from "@angular/core";
import {DynamicFormComponent} from "./components/DynamicFormComponent";
import {DynamicInputComponent} from "./components/DynamicInputComponent";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgFormsThemeModule} from "./themes/NgFormsThemeModule";
import {TranslateModule} from "@ngx-translate/core";
import 'reflect-metadata';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        TranslateModule,
        NgFormsThemeModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicInputComponent
    ],
    exports: [
        NgFormsThemeModule,
        DynamicFormComponent,
        DynamicInputComponent
    ]
})
export class NgFormsModule {

}

