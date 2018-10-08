import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SingleFont } from '../../models/font.model';

@Component({
  selector: 'app-remove-font-button',
  templateUrl: './remove-font-button.component.html',
  styleUrls: ['./remove-font-button.component.scss']
})
export class RemoveFontButtonComponent implements OnInit {
  @Input()
  font: SingleFont;
  @Output()
  removeFromSelectedFontsEE = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit() {}

  removeFromSelectedFonts(family: string) {
    this.removeFromSelectedFontsEE.emit(family);
  }
}
