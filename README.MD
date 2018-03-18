## ng-dynamic-form 

This module will make your form building in Angular 4+ easier.
Dynamically create reactive forms, as simple as adding a component and provide with required inputs.


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
<app-dynamic-form [inputs]="getInputs()"></app-dynamic-form>

```

`getInputs()`:
```typescript
getInputs(): BaseInput[] {
    return [
        new TextInput(),
        new TextInput(),
        new TextInput(),
        new TextareaInput(),
        new TextareaInput(),
        new TextareaInput(),
        new SelectInput(),
        new SelectInput(),
        new SelectInput(),
    ]
}
``` 

this will create a form with 3 text input fields , 3 textarea and 3 selects.

More input coming up, feel free to ask.
