import {Component} from "@angular/core";
import {BaseInput} from "../src/inputs/base/BaseInput";
import {BookModel} from "./BookModel";

@Component({
    selector: 'my-example-book-form',
    template: '<ng-forms-material [inputs]="getInputs()"></ng-forms-material>'
})
class ExampleComponent {
    private book: BookModel = new BookModel(
        'Test book',
        '',
        [
            {id: '1', name: 'Roger'},

            {id: '2', name: 'Roger2'}
        ],
        true,
        [
            {catId: '1', catName: 'My cat 1'},
            {catId: '2', catName: 'My cat 2'},
        ]
    );

    public getInputs(): BaseInput[] {
        // For demo purpose BookModel is instantiated here , it can also be a injectable
        return this.book.getFormFields();
    }
}
