import { Component } from "@angular/core";
import { CdkDrag } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-stats-cards",
  imports: [CdkDrag],
  templateUrl: "./stats-cards.component.html",
  styleUrl: "./stats-cards.component.scss",
})
export class StatsCardsComponent {}
