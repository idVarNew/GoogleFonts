import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {
  
  @Input()
  font: SingleFont;
  @Input()
  fontStyles: Array<string>;
  @Output()
  selectStyleEE = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectStyle(style: string) {
    this.selectStyleEE.emit(style);
  }
}
