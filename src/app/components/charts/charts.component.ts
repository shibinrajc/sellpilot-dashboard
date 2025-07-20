import { Component } from "@angular/core";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { CdkDrag } from "@angular/cdk/drag-drop";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

// ✅ Register required components
echarts.use([
  MapChart,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
]);

@Component({
  selector: "app-charts",
  standalone: true,
  imports: [NgxEchartsModule, CommonModule, CdkDrag],
  templateUrl: "./charts.component.html",
  styleUrl: "./charts.component.scss",
})
export class ChartsComponent {
  chartOptions = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      borderColor: "#b57edc",
      borderWidth: 1,
      textStyle: {
        color: "#333",
        overflow: "break",
      },
      formatter: (params: any) => {
        const data = params[0];
        return `
        <div style="max-width: 300px; white-space: normal;">
          <strong>${data.name}</strong><br/>
          ${data.seriesName}: <strong>${data.data}</strong>
        </div>
      `;
      },
    },
    animation: true,
    animationDuration: 800,
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
      axisLabel: {
        fontWeight: "bold",
        color: "#444",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
      axisLabel: {
        fontWeight: "bold",
        color: "#444",
      },
    },
    series: [
      {
        name: "Revenue",
        type: "bar",
        data: [15, 25, 35, 20, 30],
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          shadowBlur: 8,
          shadowColor: "rgba(181, 126, 220, 0.3)",
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#b57edc",
              },
              {
                offset: 1,
                color: "#9b59b6",
              },
            ],
          },
        },
        emphasis: {
          scale: true,
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(142, 68, 173, 0.5)",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#d1a4f5" },
                { offset: 1, color: "#8e44ad" },
              ],
            },
          },
        },
      },
    ],
  };

  growthMapOptions: any;

  constructor(private http: HttpClient) {
    this.loadWorldMap();
  }

  loadWorldMap() {
    this.http.get("assets/maps/world.json").subscribe((geoJson: any) => {
      echarts.registerMap("world", geoJson);

      this.growthMapOptions = {
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>Growth: {c}%",
        },
        visualMap: {
          min: 0,
          max: 100,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
          },
        },
        series: [
          {
            name: "Growth by Country",
            type: "map",
            map: "world",
            roam: true,
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { name: "United States", value: 35 },
              { name: "India", value: 65 },
              { name: "Germany", value: 50 },
              { name: "China", value: 80 },
              { name: "Brazil", value: 45 },
            ],
          },
        ],
      };
    });
  }
}
