import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextFiltersService {
  constructor() {}

  convertSortingType(value) {
    let sampleText = '';

    switch (value) {
      case 'alpha':
        sampleText = 'Alphabetical';
        break;
      case 'popularity':
        sampleText = 'Popular';
        break;
      case 'date':
        sampleText = 'Date added';
        break;
      case 'trending':
        sampleText = 'trending';
        break;
      default:
        sampleText = 'Alphabetical';
    }
    return sampleText;
  }
}