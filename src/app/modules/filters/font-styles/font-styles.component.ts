import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-font-styles',
  templateUrl: './font-styles.component.html',
  styleUrls: ['./font-styles.component.scss']
})
export class FontStylesComponent implements OnInit {

  @Input()
  isNumberOfStylesChecked: boolean;
  @Output()
  toogleNumberOfstylesEE = new EventEmitter<void>();
  @Output()
  filterNumberOfStylesEE = new EventEmitter<string>();
  currentStylesValue = 0;

  constructor() {}

  ngOnInit() {}

  toogleNumberOfstyles() {
    this.toogleNumberOfstylesEE.emit();
  }

  filterNumberOfStyles(value: string) {
    this.filterNumberOfStylesEE.emit(value);
  }
}
