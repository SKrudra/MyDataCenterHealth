import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {

  @Input() node: any;
  
  isDanger(prop: any) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
