import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample-text',
  templateUrl: './sample-text.component.html',
  styleUrls: ['./sample-text.component.scss']
})
export class SampleTextComponent {
  text = '';
  @Output()
  useCustomTextAsSampleEE = new EventEmitter<string>();
  @Output()
  resetSampleTextBoxEE = new EventEmitter<void>();

  useCustomTextAsSample(text: string) {
    this.useCustomTextAsSampleEE.emit(text);
  }

  resetSampleTextBox() {
    this.text = '';
    this.resetSampleTextBoxEE.emit();
  }
}
