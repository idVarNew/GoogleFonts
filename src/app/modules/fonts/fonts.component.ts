import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GooglefontsService } from '../../core/services/googlefonts.service';
import { TextFiltersService } from '../../core/services/textFilters.service';

import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/actions';
import { SingleFont, UI } from '../../shared/models/font.model';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  fonts: Array<SingleFont>;
  visibleFonts: Array<SingleFont>;
  uiState: UI;
  fontLoader = true;
  sortingType = '';

  @ViewChild('masonry')
  masonry;

  constructor(
    private store: Store<AppState>,
    private googlefontsService: GooglefontsService,
    private textFiltersService: TextFiltersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store
      .select('uiState')
      .pipe(
        tap(
          (ui: UI): void => {
            this.uiState = ui;
            this.sortingType = this.textFiltersService.convertSortingType(ui.sorting);
          }
        ),
        switchMap((ui: UI) => {
          return this.store.select('dataState').pipe(
            map((fonts: Array<SingleFont>) => {
                   
              if (ui.selectedCategory === 'all') {
                return fonts.filter((font: SingleFont) => {
                  return font.currentState.visible === true && font.subsets.indexOf(ui.selectedLanguage) > -1;
                });
              } else {
                return fonts.filter((font: SingleFont) => {
                  return font.category === ui.selectedCategory && font.subsets.indexOf(ui.selectedLanguage) > -1;
                });
              }
            }),
            tap(
              (fonts: Array<SingleFont>): void => {
                this.visibleFonts = fonts;
              }
            ),
            map((fonts: Array<SingleFont>) => {
              return fonts.filter((font: SingleFont, i: number) => {
                if (i < this.uiState.fonstPerPage) {
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
