## ng-forms (WIP)

This module will make your form building in Angular 4+ easier.
Dynamically create reactive forms, as simple as adding a component and provide with required inputs.

Should help reduce repeatable tasks when building forms.
The goal is not only make dynamic forms easy to build but even make the process more automated.
Imagine a situation when you have `new user form`  
you have a backend endpoint and some interface describing the fields,
now the idea is to feed the interface ( better class ) to the `ng-forms` and it should build the whole new user form for you.

### How to use:
Add a this to your AppModule: 

```typescript 

@NgModule({
    imports: [
        NgFormsModule
    ],
})
export AppModule

```

Now you can use the component:

```html
<ng-forms [inputs]="getInputs()" (submit)="doSomeThing($event)"></ng-forms >

```

#### Automated usage:
The easiest way to use `ng-dynamic-form` is to add decorators to your models and extend from `DynamicFormModel`


```typescript
// Your model
export class BookModel extends NgFormsModel {
    private uuid: string;

    @NgFormField({ fieldType: FormFieldType.TEXT })
    private name: string;

    @NgFormField({ fieldType: FormFieldType.TEXT_AREA })
    private description: string;

    @NgFormField({
        fieldType: FormFieldType.SELECT,
        selectOptionKeys: {labelKey: 'name', valueKey: 'id'}
    })
    private authors: {id: string, name: string}[];

    constructor(name: string, description: string, authors: { id: string; name: string }[]) {
        super();
        this.name = name;
        this.description = description;
        this.authors = authors;
    }
}


```
now in your component you can do the following:

```typescript
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
        ]
    );

    public getInputs(): BaseInput[] {
        // For demo purpose BookModel is instantiated here , it can also be a injectable
        return this.book.getFormFields();
    }
}


```

That is it , the `getFormFields()` will return an array of FormInputs , it will scan your Model for decorated properties
and will use them to build the form.

#### Manual way

If you need more flexibility you can create the form fields Manual.
Lets change the first example a bit.

```typescript
@Component({
    selector: 'my-example-book-form',
    template: '<ng-forms-material [inputs]="getInputs()"></ng-forms-material>'
})
class ExampleComponent {

    public getInputs(): BaseInput[] {
        // For demo purpose BookModel is instantiated here , it can also be a injectable
        return [
            new TextInput('book-name'),
            new TextAreaInput('book-description'),
        ];
    }
}

```

### Templates

You can override and create custom templates for your forms.
Ive made a couple of build in Themes.
For example see material design theme.

To use it simply replace the `<ng-forms>`  with `<ng-forms-material>`



More input coming up, feel free to ask.
Npm coming up.
