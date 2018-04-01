## ng-dynamic-form (WIP)

This module will make your form building in Angular 4+ easier.
Dynamically create reactive forms, as simple as adding a component and provide with required inputs.

Should help reduce repeatable tasks when building forms.
The goal is not only make dynamic forms easy to build but even make the process more automated.
Imagine a situation when you have `new user form`  
you have a backend endpoint and some interface describing the fields,
now the idea is to feed the interface ( better class ) to the `ng-dynamic-form` and it should build the whole new user form for you.

### How to use:
Add a this to your AppModule: 

```typescript 

@NgModule({
    imports: [
        NgDynamicForm
    ],
})
export AppModule

```

Now you can use the component:

```html
<app-dynamic-form [inputs]="getInputs()" (submit)="doSomeThing($event)"></app-dynamic-form>

```

#### Automated usage:
The easiest way to use `ng-dynamic-form` is to add decorators to your models and extend from `DynamicFormModel`


```typescript
// Your model
export class BookModel extends DynamicFormModel {
    private uuid: string;

    @NgFormField(FormFieldType.TEXT)
    private name: string;

    @NgFormField(FormFieldType.TEXT_AREA)
    private description: string;
}

```
now in your component you can do the following:

```typescript
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

```

That is it , the `getFormFields()` will return an array of FormInputs , it will scan your Model for decorated properties
and will use them to build the form.

#### Manual way

If you need more flexibility you can create the form fields Manual.
Lets change the first example a bit.

```typescript
@Component({
    selector: 'my-example-book-form',
    template: '<app-dynamic-form-material [inputs]="getInputs()"></app-dynamic-form-material>'
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

To use it simply replace the `<app-dynamic-form>`  with `<app-dynamic-form-material>`



More input coming up, feel free to ask.
Npm coming up.
