import { NodesComponent } from './../nodes/nodes.component';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.scss']
})
export class NodesDetailComponent {

  @Input() node;

  constructor(public activeModal: NgbActiveModal) { }

  isDanger(prop: string) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  getType(prop: string) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }

}
