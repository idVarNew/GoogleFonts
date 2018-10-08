import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../../../shared/models/font.model';

@Component({
  selector: 'app-selected-variants',
  templateUrl: './selected-variants.component.html',
  styleUrls: ['./selected-variants.component.scss']
})
export class SelectedVariantsComponent {
  @Input()
  selectedFonts: Array<SingleFont>;
  @Output()
  selectVariantEE = new EventEmitter<{ font: SingleFont; variant: string }>();
  @Output()
  removeFromSelectedFontsEE = new EventEmitter<string>();

  selectVariant(font: SingleFont, variant: string) {
    this.selectVariantEE.emit({ font, variant });
  }

  removeFromSelectedFonts(family: string) {
    this.removeFromSelectedFontsEE.emit(family);
  }
}
