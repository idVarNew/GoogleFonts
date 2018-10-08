import { Component, OnInit, Input, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as AppActions from '../../../store/actions';
import { SingleFont, UI } from '../../../shared/models/font.model';

@Component({
  selector: 'app-font-preview',
  templateUrl: './font-preview.component.html',
  styleUrls: ['./font-preview.component.scss']
})
export class FontPreviewComponent implements OnInit {
  @Input()
  font: SingleFont;
  @ViewChild('customTextPreview')
  customTextPreview: ElementRef;
 
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  getCustomText(text) {
    new AppActions.changeSampleText({ family: this.font.family, sampleText: '', sampleType: 'custom' })
  }

  focusCustomText() {
    setTimeout(() => {
      this.customTextPreview.nativeElement.focus();
    }, 0);
  }
}
