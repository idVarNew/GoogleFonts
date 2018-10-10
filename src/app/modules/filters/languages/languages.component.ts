import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as AppActions from '../../../store/actions';
import { GooglefontsService } from '../../../core/services/googlefonts.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  allLanguages = [
    'latin',
    'sinhala',
    'latin-ext',
    'greek',
    'hebrew',
    'cyrillic-ext',
    'greek-ext',
    'cyrillic',
    'vietnamese',
    'devanagari',
    'arabic',
    'khmer',
    'khmer',
    'bengali',
    'bengali',
    'oriya',
    'malayalam',
    'gurmukhi',
    'kannada',
    'telugu',
    'korean',
    'japanese',
    'myanmar'
  ];
  @Input()
  defaultLanguage = 'latin';
  @Output()
  filterCategoryEE = new EventEmitter<string>();
  @Output()
  sortByEE = new EventEmitter<string>();

  constructor(private store: Store<AppState>, private googlefontsService: GooglefontsService) {}

  ngOnInit() {
    }

  filterByLanguage(language: string) {
   this.store.dispatch(new AppActions.filterByLanguage(language));
  }

  sortBy(sortType: string) {
    this.sortByEE.emit(sortType);
  }
}
