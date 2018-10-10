import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GooglefontsService } from '../core/services/googlefonts.service';
import { switchMap, map, catchError, withLatestFrom, tap, concatMap } from 'rxjs/operators';
import * as AppActions from './actions';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.state';
import { SingleFont, UI, Filtered } from '../shared/models/font.model';

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
    withLatestFrom(this.store.select('filterFonts'), (action, state) => state),
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
    ofType(
      AppActions.GET_FONTS,
      AppActions.FILTER_LANGUAGES,
      AppActions.SORT_FONTS,
      AppActions.FILTER_NUMBER_OF_STYLES
    ),
    withLatestFrom(this.store, (action, state: AppState) => state),
    switchMap((store: AppState) => {
      const cachedFonts: Array<SingleFont> = store['cacheFonts'];

      return this.googlefontsService
        .getFonts(
          `&sort=${store.filterFonts.sorting}`,
          store.filterFonts.category,
          store.filterFonts.language,
          store.filterFonts.styles
        )
        .pipe(
          map((data: Array<SingleFont>) => {
            data.forEach(
              (font: SingleFont): void => {
                const cachedFont = cachedFonts.filter((item: SingleFont) => {
                  return font.family === item.family;
                });
                font.currentState = persistValues(cachedFont[0]);
              }
            );
            return new AppActions.loadData(data);
          }),
          catchError(error => error)
        );
    })
  );

  @Effect()
  searchFonts$ = this.actions$.pipe(
    ofType(AppActions.SEARCH_FONTS),
    withLatestFrom(this.store, (action: Action, state: AppState) => {
      return { action, state };
    }),
    switchMap(store => {
      const cachedFonts: Array<SingleFont> = store.state['cacheFonts'];

      return this.googlefontsService.getFonts(`&sort=${'all'}`, 'all', 'latin').pipe(
        map((data: Array<SingleFont>) => {
          const fonts = data.filter((font: SingleFont) => {
            const family: string = font.family.toLowerCase();
            const query: string = store.action['payload'].toLowerCase();

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

function persistValues(cacheFont) {
  return {
    current: cacheFont.currentState.current,
    selected: cacheFont.currentState.selected,
    selectedVariants: Object.assign({}, cacheFont.currentState.selectedVariants),
    selectedSubsets: Object.assign({}, cacheFont.currentState.selectedSubsets),
    size: cacheFont.currentState.size,
    sampleText: cacheFont.currentState.sampleText,
    sampleType: cacheFont.currentState.sampleType,
    previewVariants: Object.assign({}, cacheFont.currentState.previewVariants)
  };
}
