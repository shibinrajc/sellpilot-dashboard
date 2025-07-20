import { Component } from "@angular/core";
import { CdkDrag } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-recent-orders",
  imports: [CdkDrag],
  templateUrl: "./recent-orders.component.html",
  styleUrl: "./recent-orders.component.scss",
})
export class RecentOrdersComponent {}
