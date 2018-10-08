import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() query = '';
  @Output()
  searchFontsEE = new EventEmitter<string>();
  @Output()
  resetSearchBoxEE = new EventEmitter<void>();
  constructor() {}

  searchFonts(query: string) {
    this.searchFontsEE.emit(query);
  }

  resetSearchBox() {
    this.query = '';
    this.resetSearchBoxEE.emit();
  }
}
