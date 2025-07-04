import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ChartsComponent } from '../components/charts/charts.component';
import { StatsCardsComponent } from '../components/stats-cards/stats-cards.component';
import { RecentOrdersComponent } from '../components/recent-orders/recent-orders.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    StatsCardsComponent,
    ChartsComponent,
    RecentOrdersComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // You can later replace these with API calls
  totalSales = 2500;
  newCustomers = 110;
  returnProducts = 72;
  totalRevenue = 8220.64;

  recentOrders = [
    {
      id: '#878909',
      date: '2 Dec 2026',
      customer: 'Oliver John Brown',
      category: 'Shoes, Shirt',
      status: 'Pending',
      items: 2,
      total: '$789.00',
    },
    {
      id: '#878909',
      date: '1 Dec 2026',
      customer: 'Noah James Smith',
      category: 'Sneakers, T-shirt',
      status: 'Completed',
      items: 3,
      total: '$967.00',
    },
  ];
}
