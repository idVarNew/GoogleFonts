import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit {
  variant1 = '400,normal';
  @Input()
  combineVariants;
  @Output()
  selectVariantToPreviewEE = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectVariantToPreview($event) {
    this.selectVariantToPreviewEE.emit($event);
  }
}
