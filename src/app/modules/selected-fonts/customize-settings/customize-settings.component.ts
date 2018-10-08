import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-customize-settings',
  templateUrl: './customize-settings.component.html',
  styleUrls: ['./customize-settings.component.scss']
})
export class CustomizeSettingsComponent {
  @Input()
  selectedFonts: Array<SingleFont>;
  @Input()
  subsets: Array<string>;
  @Input()
  selectedLangSubsets: Array<string>;
  @Output()
  selectVariantEE = new EventEmitter<{ font: SingleFont; variant: string }>();
  @Output()
  selectSubsetEE = new EventEmitter<{ subset: string; event: string }>();
  @Output()
  removeFromSelectedFontsEE = new EventEmitter<string>();

  selectVariant(event: { font: SingleFont; variant: string }) {
    this.selectVariantEE.emit({ font: event.font, variant: event.variant });
  }

  selectSubset(event: { subset: string; event: string }) {
    this.selectSubsetEE.emit({ subset: event.subset, event: event.event });
  }

  removeFromSelectedFonts(family: string) {
    this.removeFromSelectedFontsEE.emit(family);
  }
}
