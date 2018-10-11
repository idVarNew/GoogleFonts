import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextFiltersService {
  constructor() {}

  convertSortingType(value) {
    let type = '';

    switch (value) {
      case 'alpha':
        type = 'Alphabetical';
        break;
      case 'popularity':
        type = 'Popular';
        break;
      case 'date':
        type = 'Date added';
        break;
      case 'trending':
        type = 'trending';
        break;
      default:
        type = 'Alphabetical';
    }
    return type;
  }
}
