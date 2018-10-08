import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  @Input()
  fontSize: number;
  @Output()
  showCurrentSizeEE = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  showCurrentSize(value: number) {
    this.showCurrentSizeEE.emit(value);
  }
}
