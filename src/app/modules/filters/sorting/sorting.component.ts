import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GooglefontsService } from '../../../core/services/googlefonts.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Input()
  sorting: string;
  @Output()
  sortFontsEE = new EventEmitter<string>();

  constructor(private googlefontsService: GooglefontsService) {}

  sortFonts(value: string) {
    this.sortFontsEE.emit(value);
  //  this.googlefontsService.fontLoader = true;
  }
}
