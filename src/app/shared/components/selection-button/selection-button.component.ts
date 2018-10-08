import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../models/font.model';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements OnInit {
  @Input()
  font;
  @Output()
  selectEE = new EventEmitter<SingleFont>();
  @Input()
  size;
  constructor() {}

  ngOnInit() {}

  addFontToSelected(font: SingleFont) {
    this.selectEE.emit(font);
  }
  removeFontFromSelected(font: SingleFont) {
    this.selectEE.emit(font);
  }
}
