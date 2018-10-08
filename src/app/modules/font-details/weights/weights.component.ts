import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-weights',
  templateUrl: './weights.component.html',
  styleUrls: ['./weights.component.scss']
})
export class WeightsComponent implements OnInit {
  @Input()
  fontWeights: Array<string>;
  @Input()
  font: SingleFont;
  @Output()
  selectWeightEE = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectWeight(weight: string) {
    this.selectWeightEE.emit(weight);
  }
}
