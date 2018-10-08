import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-selected-preview',
  templateUrl: './selected-preview.component.html',
  styleUrls: ['./selected-preview.component.scss']
})
export class SelectedPreviewComponent {
  @Input()
  path: string;
  @Input()
  selectedFonts: Array<SingleFont>;
  @Output()
  removeSelected = new EventEmitter<string>();
  @Output()
  clearAllSelected = new EventEmitter<void>();

  removeFromSelectedFonts(family: string) {
    this.removeSelected.emit(family);
  }
  clearAllSelectedFonts() {
    this.clearAllSelected.emit();
  }
}
