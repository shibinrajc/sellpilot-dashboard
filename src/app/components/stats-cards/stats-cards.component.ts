import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkDrag, DragDropModule, CdkDragEnd } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-stats-cards",
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: "./stats-cards.component.html",
  styleUrl: "./stats-cards.component.scss",
})
export class StatsCardsComponent implements OnInit {
  cards = [
    {
      id: "total-sales",
      label: "Total Sales",
      value: 2500,
      status: "+4.9%",
      statusClass: "green",
      icon: "bi-currency-dollar",
      arrow: "bi-arrow-up-short",
      x: 0,
      y: 0,
    },
    {
      id: "new-customers",
      label: "New Customers",
      value: 110,
      status: "+7.5%",
      statusClass: "blue",
      icon: "bi-person-plus-fill",
      arrow: "bi-arrow-up-short",
      x: 315,
      y: 0,
    },
    {
      id: "return-products",
      label: "Return Products",
      value: 72,
      status: "-6.0%",
      statusClass: "red",
      icon: "bi-arrow-counterclockwise",
      arrow: "bi-arrow-down-short",
      x: 630,
      y: 0,
    },
    {
      id: "total-revenue",
      label: "Total Revenue",
      value: "$8,220.64",
      status: "+3.2%",
      statusClass: "green",
      icon: "bi-wallet2",
      arrow: "bi-arrow-up-short",
      x: 945,
      y: 0,
    },
  ];

  ngOnInit() {
    const saved = localStorage.getItem("cardPositions");
    if (saved) {
      const positions = JSON.parse(saved);
      this.cards.forEach((card) => {
        if (positions[card.id]) {
          card.x = positions[card.id].x;
          card.y = positions[card.id].y;
        }
      });
    }
  }

  onDragEnd(event: CdkDragEnd, cardId: string) {
    const element = event.source.getRootElement();
    const transform = element.style.transform;

    const match = /translate3d\((.*)px,\s*(.*)px,/.exec(transform);
    if (match) {
      const x = parseFloat(match[1]);
      const y = parseFloat(match[2]);

      const positions = JSON.parse(
        localStorage.getItem("cardPositions") || "{}"
      );
      positions[cardId] = { x, y };
      localStorage.setItem("cardPositions", JSON.stringify(positions));
    }
  }
}
