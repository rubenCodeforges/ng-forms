## ng-dynamic-form (WIP)

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
private inputs: BaseInput[] = [
    new TextInput('userName'),
    new SelectInput('testSelector',
        [
            {value: '', label: 'test'},
            {value: '', label: 'test2'},
            {value: '', label: 'test3'},
            {value: '', label: 'test4'}
        ])
];

getInputs(): BaseInput[] {
    return this.inputs;
}
``` 

this will create a form with 3 text input fields , 3 textarea and 3 selects.

More input coming up, feel free to ask.
Npm coming up.
