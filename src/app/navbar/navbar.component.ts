// import { ViewEncapsulation } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles: [`.btn { background-color: #999999; }`],
  // encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter();

  refresh() {
    this.onRefresh.emit();
  }

}
