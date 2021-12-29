import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyDataCenterHealth';
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent; // Non-null assertion operator

  refresh() {
    this.dashboard.generateData();
  }
}
