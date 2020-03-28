# Angular Multi-Input-Array Component Ngx-multi-inputs (Angular 2+)

Component will return array of input fields values which you sepcify its type i.e. text, email, etc..

[![](https://i.ibb.co/MZT6zcH/testing-inputs.gif)](https://i.ibb.co/MZT6zcH/testing-inputs.gif)


## Features
- The package will work just fine with its default values in case you didn't provide properties input values.
- Set title to be shown on inputs, if you provided a `title` property it will be show on the lable, placeholder and the button. For example if your fileds is for `skills` you provide the title like this `title="skills"` and the label will become "please enter skill", the button will read "Add skills", and so on. Or you can provide the text for each of these items. 
- You set the limit to the number of fields can be added
- You can make the first input required field
- You can provide a RegExp pattern for the first input field to be validated with.
- You can specify all the text even the error messages for the required field. In case not specified default values text will be shown.
- You can use the default style like in the image or you can specify classes for each element (form tag, for-group, label, field, btn, and error messages).
- In case you provided classes, only the classes your provided will be applied to the element and the default class will be removed

## Getting Started

### Installing
```
npm i ngx-multi-inputs
```

## Configuration
Ensure you import the module and the dependencies:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiInputsModule } from "ngx-multi-inputs";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MultiInputsModule
  ], 
  exports: [],
  providers: [],
})
export class AppModule { }

```

### Basic Usage

```html
<ngx-multi-inputs
  title="Email"
  type="email"
  formClasses="my-form"
  placeholder="enter email"
  btnText="Add"
  name="emails"
  [required]="true"
  [tabIndex]="1"
  [limit]="4"
  (inputValues)="getValues($event)">
</ngx-multi-inputs>
```
```typescript
@Component({
  selector: 'app',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
});

export class App {
  getValues(inputValues) {
    console.log({ inputValues })
  }
}
```

### Api for multi-inputs Component

#### Inputs []
- **`title`** - **`[string]`** - Will be used as the title. if provided, it will be show on the lable, placeholder and the button. For example if your fileds is for `social link`, the label will become "please enter social link", the button will read "Add social link", and so on. Or you can provide the text for each of these items. 
- **`type`** -  **`[string]`** - `type` attribute of input fields.
- **`btnText`** -  **`[string]`** - The text will be written on the button which adds more fields.
- **`labelText`** -  **`[string]`**  - The text will be used as the label for the first input then it will have number beside the text. ex: `enter value` will become `evnter value 2` for the second input field.
- **`placeholder`** -  **`[string]`**  - The text will be used as the placeholder for the first input then it will have number beside the text. ex: `enter value` will become `evnter value 2` for the second input field.
- **`placeholder`** -  **`[string]`**  - The text will be used as the placeholder for the first input then it will have number beside the text. ex: `enter value` will become `evnter value 2` for the second input field.
- **`iconSrc`** -  **`[string]`**  - The URL of your icon src.
- **`requiredFieldMsg`** -  **`[string]`**  - The text will be shown in case the first field is required and it's not provided. Its default value is `Required field`.
- **`invalidValueMsg`** -  **`[string]`**  - The text will be shown in case the first field has a pattern which is not mathced. Its default value is `Invalid pattern`.
- **`tabIndex`** -  **`[number]`**  - The value of `tabindex` attribute which will be accumlative in other fields. Its default value is `1`.
- **`required`** -  **`[boolean]`**  - Wether the value pf first inputs is required or not. Its default value is `false`.
- **`limit`** -  **`[number]`**  - Maximum number of fields total fields plus the default one. Its default value is `5`.
- **`name`** -  **`[string]`**  - `name` attribute for each input field which is accumlative in the added fields . Its default value is `multi-inputs`.
- **`formClasses`** -  **`[string]`**  - To provide a class or classes for the enclosing `<form>` tag.
- **`inputGroupClasses`** -  **`[string]`**  - To provide a class or classes for the inputs group which contains the label, the input field, and the error message div.
- **`fieldClasses`** -  **`[string]`**  - To provide a class or classes for the inputs field.
- **`labelClasses`** -  **`[string]`**  - To provide a class or classes for the label.
- **`errClasses`** -  **`[string]`**  - To provide a class or classes for error message `<div>`.
- **`removeIconClasses`** -  **`[string]`**  - To provide a class or classes for delete field icon.
- **`btnClasses`** -  **`[string]`**  - To provide a class or classes for "add field" button.

#### Outputs ()
- **`inputValues`** -  **`[Array]`**  - Handle the Array of input fileds values.