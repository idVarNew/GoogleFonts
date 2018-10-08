import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-size-options',
  templateUrl: './size-options.component.html',
  styleUrls: ['./size-options.component.scss']
})
export class SizeOptionsComponent implements OnInit {
  current = false;
  defaultSize: number;
  @Input()
  font: SingleFont;
  @Output()
  changeSizeEE = new EventEmitter<{ family: string; fontSize: string }>();
  @Output()
  curentSizeEE = new EventEmitter<number>();

  ngOnInit() {
    this.defaultSize = this.font.currentState.size;
  }

  changeFontSize(family: string, fontSize: string) {
    this.current = false;
    this.changeSizeEE.emit({ family, fontSize });
  }
  
  showCurrentSize(value: number) {
    this.current = true;
    this.defaultSize = value;
    this.curentSizeEE.emit(value);
  }
}
