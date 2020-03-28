import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "ngx-multi-inputs",
  templateUrl: "./multi-inputs.component.html",
  styleUrls: ["./multi-inputs.component.css"]
})
export class MultiInputsComponent implements OnInit {
  @Input("title") title: string;
  @Input("type") type = "text";
  @Input("btnText") btnText = "Add";
  @Input("labelText") labelText: string;
  @Input("placeholder") placeholder: string;
  @Input("iconSrc") iconSrc = "https://svgshare.com/i/JY2.svg";
  @Input("removeIconClasses") removeIconClasses: string;
  @Input("requiredFieldMsg") requiredFieldMsg = "Required field";
  @Input("invalidValueMsg") invalidValueMsg = "Invalid pattern";
  @Input("tabIndex") tabIndex = 1;
  @Input("required") required = false;
  @Input("pattern") pattern: RegExp;
  // @Input("validateInput") validateInput = false;
  @Input("limit") limit = 5;
  @Input("name") name = "multi-inputs";

  @Input("formClasses") formClasses: string;
  @Input("inputGroupClasses") inputGroupClasses: string;
  @Input("fieldClasses") fieldClasses: string;
  @Input("labelClasses") labelClasses: string;
  @Input("errClasses") errClasses: string;
  @Input("btnClasses") btnClasses: string;
  @Output() inputValues: EventEmitter<any> = new EventEmitter();
  valuesArray = [""];
  f;
  constructor() { }

  onSubmit(f) {
    if (f.form.invalid) {
      for (let control in f.form.controls) {
        f.form.controls[control].touched = true;
      }
      return;
    }
  }

  ngOnInit() {
    this.labelText = `Please enter ${this.title || 'value'}`;
    this.placeholder = `Please enter ${this.title || 'value'}`;
  }
  emitValues(item?) {
    let valuesArray = this.valuesArray.filter(element => element);
    this.inputValues.emit(valuesArray);
  }

  addInput(e) {
    if (this.valuesArray.length >= this.limit) return;
    this.valuesArray.push("");
  }
  removeInput(i) {
    if (this.valuesArray.length) {
      this.valuesArray.splice(i, 1);
      this.emitValues();
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
