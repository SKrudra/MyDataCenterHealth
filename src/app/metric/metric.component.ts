import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent { //  implements OnChanges
  private _value: number = 0;
  private _max: number = 100;

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) {
      this._value = 0;
    } else if (value > 100) {
      this._value = 100;
    } else {
      this._value = value;
    }
  }

  get value(): number {
    return this._value;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max) || max > 100) {
      this._max = 100;
    } else {
      this._max = max;
    }
  }

  get max(): number {
    return this._max;
  }

  // @Input() value: number = 0;
  // @Input() max: number = 100;
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //     if (changes['value'] && isNaN(changes['value'].currentValue)) {
  //       this.value = 0;
  //     } else {
  //       this.value = changes['value'].currentValue;
  //     }
  //     if (changes['max'] && isNaN(changes['max'].currentValue)) {
  //       this.max = 100;
  //     } else {
  //       this.max = changes['max'].currentValue;
  //     }
  // }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
