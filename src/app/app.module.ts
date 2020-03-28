import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MultiInputsModule } from "./modules/multi-inputs/multi-inputs.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MultiInputsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
