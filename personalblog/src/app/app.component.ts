import { Component } from "@angular/core";

import HomeComponent from "./pages/(home).page";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "personalblog-root",
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
