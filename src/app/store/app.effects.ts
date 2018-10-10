import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GooglefontsService } from '../core/services/googlefonts.service';
import { switchMap, map, catchError, withLatestFrom, tap, concatMap } from 'rxjs/operators';
import * as AppActions from './actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { SingleFont, UI } from '../shared/models/font.model';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private googlefontsService: GooglefontsService
  ) {}

  @Effect()
  getGoogleGonts$ = this.actions$.pipe(
    ofType(AppActions.LOAD_INITIAL_DATA),
    withLatestFrom(this.store.select('filterFontsState'), (action, state) => state),
    switchMap(state =>
      this.googlefontsService.getFonts(`&sort=${state.sorting}`, state.category, state.language).pipe(
        map((data: any) => {
          this.store.dispatch(new AppActions.cache(data));
          return new AppActions.loadData(data);
        }),
        catchError(error => error)
      )
    )
  );

  @Effect({ dispatch: false })
  isChangesMade$ = this.actions$.pipe(
    ofType(
      AppActions.GET_FONTS,
      AppActions.FILTER_LANGUAGES,
      AppActions.SORT_FONTS,
      AppActions.SORTED_BY,
      AppActions.IS_NUMBER_OF_STYLES_CHECKED,
      AppActions.CHANGE_FONT_SIZE,
      AppActions.SELECT_SUBSET,
      AppActions.USE_CUSTOM_TEXT_AS_SAMPLE,
      AppActions.SAMPLE_TEXT_TYPE,
      AppActions.SEARCH_FONTS
    ),
    tap(() => {
      this.store.dispatch(new AppActions.isChangesMade());
    })
  );

  @Effect()
  getFilteredFonts$ = this.actions$.pipe(
    ofType('GET_FONTS', 'FILTER_LANGUAGES', 'SORT_FONTS', 'FILTER_NUMBER_OF_STYLES'),
    withLatestFrom(this.store, (action, state) => state),
    switchMap(store => {
      const cachedFonts = store['cacheFonts'];

      return this.googlefontsService
        .getFonts(
          `&sort=${store.filterFontsState.sorting}`,
          store.filterFontsState.category,
          store.filterFontsState.language,
          store.filterFontsState.styles
        )
        .pipe(
          map(data => {
            data.forEach((font: SingleFont) => {
              const cachedFont = cachedFonts.filter((item: SingleFont) => {
                return font.family === item.family;
              });
              font.currentState = persistValues(cachedFont[0]);
            });
            return new AppActions.loadData(data);
          }),
          catchError(error => error)
        );
    })
  );

  @Effect()
  searchFonts$ = this.actions$.pipe(
    ofType('SEARCH_FONTS'),
    withLatestFrom(this.store, (action, state) => {
      return { action, state };
    }),
    switchMap(store => {
      const cachedFonts = store.state['cacheFonts'];

      return this.googlefontsService.getFonts(`&sort=${'alpha'}`, 'all', 'latin').pipe(
        map(data => {
          const fonts = data.filter(font => {
            const family = font.family.toLowerCase();
            const query = store.action['payload'].toLowerCase();

            if (family.includes(query)) {
              const cachedFont = cachedFonts.filter((item: SingleFont) => {
                return font.family === item.family;
              });
              font.currentState = persistValues(cachedFont[0]);

              return font;
            }
          });
          return new AppActions.loadData(fonts);
        }),
        catchError(error => error)
      );
    })
  );
}

function persistValues(oldFont) {
  return {
    current: oldFont.currentState.current,
    selected: oldFont.currentState.selected,
    selectedVariants: Object.assign({}, oldFont.currentState.selectedVariants),
    selectedSubsets: Object.assign({}, oldFont.currentState.selectedSubsets),
    size: oldFont.currentState.size,
    sampleText: oldFont.currentState.sampleText,
    sampleType: oldFont.currentState.sampleType,
    previewVariants: Object.assign({}, oldFont.currentState.previewVariants)
  };
}
