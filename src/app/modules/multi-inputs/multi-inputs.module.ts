import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiInputsComponent } from "./multi-inputs.component";

@NgModule({
  declarations: [MultiInputsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MultiInputsComponent]
})
export class MultiInputsModule { }
