import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GooglefontsService } from '../../../core/services/googlefonts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input()
  selectedCategory: string;
  @Output()
  filterCategoryEE = new EventEmitter<string>();
  @Output()
  sortByEE = new EventEmitter<string>();

  constructor(private googlefontsService: GooglefontsService) {}

  filterCategory(category: string) {
    this.filterCategoryEE.emit(category);
    console.log( this.selectedCategory)
  }

  sortBy(sortType: string) {
    this.sortByEE.emit(sortType);
  }
}
