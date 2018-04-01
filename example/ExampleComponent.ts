import {Component} from "@angular/core";
import {BaseInput} from "../inputs/BaseInput";
import {BookModel} from "./BookModel";

@Component({
    selector: 'my-example-book-form',
    template: '<app-dynamic-form-material [inputs]="getInputs()"></app-dynamic-form-material>'
})
class ExampleComponent {

    public getInputs(): BaseInput[] {
        // For demo purpose BookModel is instantiated here , it can also be a injectable
        return new BookModel().getFormFields();
    }
}
