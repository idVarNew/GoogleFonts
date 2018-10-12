import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GooglefontsService } from '../../core/services/googlefonts.service';
import { TextFiltersService } from '../../core/services/textFilters.service';

import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/actions';
import { SingleFont, UI, Filtered } from '../../shared/models/font.model';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  fonts: Array<SingleFont>;
  availableFonts: Array<SingleFont>;
  filters: Filtered;
  fontLoader = true;
  perPage: number;
  @ViewChild('masonry')
  masonry;

  constructor(
    private store: Store<AppState>,
    private googlefontsService: GooglefontsService,
    private textFiltersService: TextFiltersService
  ) {}

  changeFilter(filter) {
    this.store.dispatch(new AppActions.filterByCategory(filter));
    this.store.dispatch(new AppActions.getFonts());
  }
  searchFonts(value) {
    this.store.dispatch(new AppActions.searchFonts(value));
  }
  sortBy(value) {
    this.store.dispatch(new AppActions.getSorted(value));
  }

  ngOnInit() {
    this.store.select('filterFontsState').subscribe((store):void => {
        this.filters = store
        this.textFiltersService.convertSortingType(store.sorting);
      }
    );

    this.store
      .select('uiState')
      .pipe(
        tap(
          (ui: UI): void => {
            this.perPage = ui.fonstPerPage;
          }
        ),
        switchMap((ui: UI) => {
          return this.store.select('dataState').pipe(
            map((fonts: Array<SingleFont>) => {
              this.availableFonts = fonts;
              return fonts.filter((font: SingleFont, i: number) => {
                if (i < this.perPage) {
                  return font;
                }
              });
            }),
            tap(
              (fonts: Array<SingleFont>): void => {
                if (fonts.length > 0) {
                  this.fontLoader = this.googlefontsService.fontLoader;
                  if (this.fontLoader) {
                    this.googlefontsService.loadWebFonts(fonts, fonts.length);
                  }
                }
              }
            )
          );
        })
      )
      .subscribe((fonts: Array<SingleFont>) => {
        this.fonts = fonts.map((font: SingleFont) => {
          return font;
        });
      });
  }

  selectToPreview() {
    this.googlefontsService.fontLoader = false;
  }

  adjustLayout(): void {
    this.masonry.layout();
  }

  loadMoreFontsFonts(): void {
    this.googlefontsService.fontLoader = true;
    this.store.dispatch(new AppActions.loadMoreFonts());
    this.masonry.layout();
  }
}
