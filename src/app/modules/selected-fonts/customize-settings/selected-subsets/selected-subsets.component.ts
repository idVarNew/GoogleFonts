import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont, UI } from '../../../../shared/models/font.model';

@Component({
  selector: 'app-selected-subsets',
  templateUrl: './selected-subsets.component.html',
  styleUrls: ['./selected-subsets.component.scss']
})
export class SelectedSubsetsComponent {
  @Input()
  subsets: Array<string>;
  @Input()
  selectedFonts: Array<SingleFont>;
  @Input()
  selectedLangSubsets: Array<string>;
  @Output()
  removeFromSelectedFontsEE = new EventEmitter<string>();
  @Output()
  selectSubsets = new EventEmitter<{ subset: string; event: any }>();

  removeFromSelectedFonts(family: string) {
    this.removeFromSelectedFontsEE.emit(family);
  }

  selectSubset(subset: string, event) {
    this.selectSubsets.emit({ subset, event });
  }
}
