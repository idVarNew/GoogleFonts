import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglefontsService } from '../../core/services/googlefonts.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/actions';
import { map } from 'rxjs/operators';
import { SingleFont, UI } from '../../shared/models/font.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  path = '';
  selectedFonts: number | Array<SingleFont> = 0;
  sorting: string;
  selectedCategory: string;
  defaultLanguage: string;
  isChangesMade: boolean;
  isNumberOfStylesChecked = false;

  @ViewChild('search')
  searchComponent;
  @ViewChild('sampleText')
  sampleTextComponent;

  constructor(
    private store: Store<AppState>,
    private googlefontsService: GooglefontsService,
    private location: Location,
    private router: Router
  ) {}

  toogleNumberOfstyles() {
    this.store.dispatch(new AppActions.toogleNumberOfstyles());
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.path = this.location.path();
    });

    this.store.select('uiState').subscribe((data: UI) => {
      this.selectedCategory = data.selectedCategory;
      this.sorting = data.sorting;
      this.defaultLanguage = data.selectedLanguage;
      this.isChangesMade = data.isChangesMade;
      this.isNumberOfStylesChecked = data.isNumberOfStylesChecked;
    });

    this.store
      .select('dataState')
      .pipe(
        map((fonts: Array<SingleFont>) => {
          return fonts.filter((font: SingleFont) => {
            if (font.currentState.selected === true) {
              return font;
            }
          });
        })
      )
      .subscribe((fonts: Array<SingleFont>) => {
        this.selectedFonts = fonts;
      });
  }

  sortFonts(key: string) {
    this.sorting = key;
    this.store.dispatch(new AppActions.sortFonts(key));
    this.googlefontsService.fontLoader = true;
  }

  filterCategory(category: string) {
    this.store.dispatch(new AppActions.filterCategory(category));
  }

  useCustomTextAsSample(text: string) {
    if (text) {
      this.store.dispatch(new AppActions.useCustomTextAsSample(text));
    } else {
      this.store.dispatch(new AppActions.resetSampleText());
    }
  }

  searchFonts(query: string) {
    this.store.dispatch(new AppActions.searchFonts({query, sortedBy:`&sort=${this.sorting}`}));
  }

  removeFromSelectedFonts(family: string) {
    this.store.dispatch(new AppActions.removeFromSelectedFonts(family));
  }

  clearAllSelectedFonts() {
    this.store.dispatch(new AppActions.removeFromSelectedFonts(null));
  }

  resetAllFontsSettings() {
    this.searchComponent.resetSearchBox();
    this.sampleTextComponent.resetSampleTextBox();
    this.store.dispatch(new AppActions.resetAllFontsSettings(`&sort=alpha`));
    this.store.dispatch(new AppActions.sortFonts('alpha'));
    this.store.dispatch(new AppActions.searchFonts({query: '', sortedBy: `&sort=alpha`}));
    this.isChangesMade = false;
  }

  resetSampleTextBox() {
    this.store.dispatch(new AppActions.resetSampleText());
  }

  resetSearchBox() {
    this.store.dispatch(new AppActions.searchFonts({query: '', sortedBy: `&sort=${this.sorting}`}));
  }

  filterNumberOfStyles(value) {
    this.store.dispatch(new AppActions.filterNumberOfStyles(value));
  }
}
