import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-sample-text',
  templateUrl: './sample-text.component.html',
  styleUrls: ['./sample-text.component.scss']
})
export class SampleTextComponent {
  @Input()
  font: SingleFont;
  @Output()
  selectSampleEE = new EventEmitter<{ sampleType: string; family: string }>();

  constructor() {}

  selectSampleText(sampleType: string, family: string) {
    this.selectSampleEE.emit({ sampleType, family });
  }
}
