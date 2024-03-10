import { Component } from "@angular/core";
import { RouteMeta } from "@analogjs/router";

import HomeComponent from "./pages/(home).page";

export const routeMeta: RouteMeta = {
  redirectTo: '/home',
  pathMatch: 'full',
};

@Component({
  selector: "personalblog-root",
  standalone: true,
  imports: [HomeComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
