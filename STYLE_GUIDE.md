# Style Guide

Hello and welcome to a frontend style guide by Stu. This guide will go over generic styling that we will use on the project so that things can stay clean and consistent. When in doubt, look how it has been done in the past as that code has already gone through the review process or ask. Clean code is just as important as working code so that debugging in the future is fast and easy.

## General

### Linter and formatter

This project uses eslint and prettier for TS and HTML linting and formatting respectively. There are many extensions that you can use for auto applying eslint and prettier but at least for VSCode they should be automatically recommended for install. It is recommended that you format and lint on save but do it however you like.

Before committing any code, be sure that it passes spec by running `npm run pre-commit`. This will run both the linter and formatter.

All errors and warnings will be considered as non-passing and will be rejected from the codebase by the CI / CD so it is important that you fix them.

All files (whether linted or not) should have curly braces on the same line as declaration. This is most important for .scss files where they are not currently linted nor formatted.

All files should end with a newline character. The formatter will enforce it on the files it works on, but this should happen even on files not formatted.

## Angular

Please organize code into separate modules. Modules should rarely import one another. If a component needs to be shared between all modules it should be listed in the `shared-module`. Most models will belong in this shared module, but keep them in their own modules when possible. Always start with code in its own module and then promote it to shared as needed. In general new modules should only be created with the approval of the frontend architect as they can have a big impact on the way the app is developed.

Component classes should only have code that modifies its variables. When possible, extract functions to a component service. The name of this service should share the name of the component (replacing `Component` with `Service` in the title). It should be imported into the component as `private _selfService`. This keeps components compact and readable.

All inputs should be validated in a `_validateInputs(): void` function. This function should be called in `ngOnInit()`.

`ngOnInit` should rarely (if ever) execute any code besides functions. It is rare that it should not be completely declarative code.

### Forms

All inputs should use a form control including booleans. This way we can validate input.

Any time you have more than one form control it should be listed in a form group. The group should be created using a `private _builder: FormBuilder` in an `_initializeForm(): void {}` function. This way we can refresh the group as needed.

When an input needs to be more than anything very simple (ex. Autocomplete) please make it it's own component. This can be done by doing the following:

```
// myComponent.component.ts
getAsFormControl(name: string): FormControl {
  const absControl: AbstractControl | undefined = this.form.get(name);
  if (absControl) return absControl as FormControl; // Must override type of Abstract control in order to pass to a child component
  throw Error(`Cannot get ${name} as a form control`); // This should never be called with a form control name that we aren't positive exists
}

// myComponent.component.html
<app-child-input
  ngDefaultControl
  [control]="getAsFormControl('controlName')"
></app-child-input>
```

When done this way, there doesn't need to be an output because it is already being watched in the form group so saving is done on the parent. This can also be done with form groups as needed.

In order to save form info please follow these steps:

- initialize the form in the constructor
- immediately after call a `_watchForm()` function that will watch the form for changes
  - Check to see if the form is valid and call a save function if so
- Save function
  - Set a NodeJS.Timeout (remove previous if exists) to save. This way we are not updating the database too often
    - Default is 500ms
  - Ensure that the form is valid
  - Update the database

Done correctly, a form component will look like this:

```
export class MyComponent implements OnInit {
  public form: FormGroup = this._builder.group({
    control: [initial, Validators.required],
  });
  private _formSub: Subscription | null = null;
  private _saveDebounce: NodeJS.Timeout | null = null;

  constructor (
    private _builder: FormBuilder,
    private _saveService: SaveService,
  ) { }

  ngOnInit() {
    this._initializeForm();
    this._watchForm();
  }

  ngOnDestroy() {
    this._formSub?.unsubscribe();
  }

  private _initializeForm(): void {
    this.form.patchValue({
      control: initial,
    });
  }

  private _save(): void {
    if (this._saveDebounce) window.clearTimeout(this._saveDebounce);

    this._saveDebounce = setTimeout(async () => {
      // Save logic
      try {
        await this._saveService.save(data);
      } catch (err: any) {
        console.error(err);
      }
    }, environment.defaultDebounce);
  }

  private _watchForm(): void {
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this._save();
      }
    });
  }
}
```

## Typescript

Code should be overtly declarative. This is super important for debugging later on.

All functions must have a return type, even if that type is void.

All private variables and functions should have a preceding underscore (ex: `private _foo = bar;`). Because javascript does not actually have private variables, this helps ensure correct scoping.

This project uses an `async await` pattern for all single use asynchronous code. When you need multi-use asynchronous code blocks observables are permissable (Behavior Subjects, etc). When using any multi-use observable, please name a private variable after it like (`private _{{name}}Sub: Subscription | null`) and unsubscribe from it in the `ngOnDestroy()` lifecycle hook. This ensures that we do not have memory leaks in the application.

Whenever you typecast a variable (ex: `foo as any`) or override null safety checking (ex: `foo!.bar`) an accompanying comment must be made as to why. Often times it's because typescript is dumb and that is a valid comment but without one it isn't obvious that it was done with good reason. Most often, overriding null safety checking can be done better by first setting it as a separate variable, checking for null / undefined, and then using that throw-away variable. This is preferable to overriding the null safety checks.

## HTML

Group all attribute tags by type and leave the hanging bracket (enforced by linter and formatter). The order should go as follows:

```
<div
  *ngStarDirectives
  #templateReferenceVariables
  noEqualSignDirectives
  equalSignAttributes=""
  [inputs]=""
  [(twoWayBindings)]=""
  (outputs)="$event"
>
```

All classes should start with a `<div class="content">` tag and class. This keeps all components having a similar pattern.

## SCSS

Try to mirror the html structure in your scss in order to keep scope. This includes adding additional selectors being listed under the parent.

```
.content {
  .class {
    &:hover { }

    &:has('attr') { }
  }
}
```

`transition` is preferred over `animation` for maintainability.

### Modifiers

**All modifiers require a comment to be valid. This ensures that they are intentional and necessary**

- `!important` should not be used unless absolutely necessary. It is rare that it is actually necessary and will be scrutinized heavily in code review
- `::ng-deep` is sometimes needed because of material theme. It should be used very carefully because it removes makes the style global. When used, it should be underneath another class or id to ensure it doesn't pollute the global namespace
