import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyDataCenterHealth';
  alertRef?: ComponentRef<AlertComponent>; // ?: optional property declaration
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent; // !:  Non-null assertion operator
  @ViewChild('alertBox', {read: ViewContainerRef}) alertBox!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  alert(date: Date) {
    if (!this.alertRef) {
      this.alertRef = this.alertBox.createComponent(AlertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }
  refresh() {
    this.dashboard.generateData();
  }
}
