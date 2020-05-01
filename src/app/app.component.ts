import { Component, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  emailPattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,128}$/);
  values: any = [];
  getValues(values) {
    this.values = values;
    this.values = JSON.stringify(this.values)
  }

  ngOnInit() {}
}
