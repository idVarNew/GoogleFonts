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

    this.store.select('uiState').subscribe((state: UI) => {
      this.isChangesMade = state.isChangesMade;
      this.isNumberOfStylesChecked = state.isNumberOfStylesChecked;
    });

    this.store.select('filterFonts').subscribe(state => {

      this.selectedCategory = state.category;
      this.defaultLanguage = state.language;
      this.sorting = state.sorting;
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
    this.store.dispatch(new AppActions.getSorted(key));
    this.googlefontsService.fontLoader = true;
  }

  filterCategory(category: string) {
    this.store.dispatch(new AppActions.filterByCategory(category));
    this.store.dispatch(new AppActions.getFonts());
  }

  useCustomTextAsSample(text: string) {
    if (text) {
      this.store.dispatch(new AppActions.useCustomTextAsSample(text));
    } else {
      this.store.dispatch(new AppActions.resetSampleText());
    }
  }

  searchFonts(query: string) {
    this.store.dispatch(new AppActions.searchFonts(query));
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
    this.store.dispatch(new AppActions.filterByCategory("all"));
    this.store.dispatch(new AppActions.getSorted("alpha"));
    this.store.dispatch(new AppActions.filterByLanguage("latin"));
    this.isChangesMade = false;
  }

  resetSampleTextBox() {
    this.store.dispatch(new AppActions.resetSampleText());
  }

  resetSearchBox() {
    this.store.dispatch(new AppActions.searchFonts(""));
  }

  filterNumberOfStyles(value) {
    this.store.dispatch(new AppActions.filterByNumberOfStyles(value));
  }
}
