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

  oldState: Array<SingleFont>;

  @Effect()
  getGoogleGonts$ = this.actions$.pipe(
    ofType(AppActions.LOAD_INITIAL_DATA),
    switchMap(data =>
      this.googlefontsService.getFonts('').pipe(
        map((data: any) => {
          return new AppActions.loadData(data);
        }),
        catchError(error => error)
      )
    )
  );

  @Effect({ dispatch: false })
  isChangesMade$ = this.actions$.pipe(
    ofType(
      AppActions.SORTED_BY,
      AppActions.FILTER_CATEGORY,
      AppActions.IS_NUMBER_OF_STYLES_CHECKED,
      AppActions.CHANGE_FONT_SIZE,
      AppActions.FILTER_CATEGORY,
      AppActions.SELECT_SUBSET,
      AppActions.FILTER_LANGUAGES,
      AppActions.USE_CUSTOM_TEXT_AS_SAMPLE,
      AppActions.SAMPLE_TEXT_TYPE,
      AppActions.SEARCH_FONTS
    ),
    tap(() => {
      this.store.dispatch(new AppActions.isChangesMade());
    })
  );

  @Effect()
  sorting$ = this.actions$.pipe(
    ofType(AppActions.SORTED_BY),
    tap(action => {
      this.store.dispatch(new AppActions.getSortingMethod(action));
    }),
    withLatestFrom(this.store),
    concatMap(([action, storeState]) => {
      this.oldState = storeState['dataState'];

      return this.googlefontsService.getFonts(`&sort=${action['sortedBy']}`).pipe(
        map(data => {
          const fonts: Array<SingleFont> = data.map((font: SingleFont) => {
            const oldFonts : Array<SingleFont>= this.oldState.filter((item: SingleFont) => {
              return font.family === item.family;
            });

            font.currentState = persistValues(oldFonts[0]);
            return font;
          });
          return new AppActions.loadData(fonts);
        }),
        catchError(error => error)
      );
    })
  );

  @Effect()
  searchFonts$ = this.actions$.pipe(
    ofType(AppActions.SEARCH_FONTS),
    withLatestFrom(this.store),
    switchMap(([action, storeState]) => {
      this.oldState = storeState['dataState'];

      return this.googlefontsService.getFonts(action['payload'].sortedBy).pipe(
        map(data => {
           data.forEach((font: SingleFont) => {
            font.currentState.visible = true;

            const oldFonts: Array<SingleFont> = this.oldState.filter((item:SingleFont) => {
              return font.family === item.family;
            });

            font.currentState = persistValues(oldFonts[0]);
            return font;
          });
          return new AppActions.changeVisibleFonts(action['payload'].query);
        }),
        catchError(error => error)
      );
    })
  );
}

function persistValues(oldFont) {
  return {
    current: oldFont.currentState.current,
    visible: oldFont.currentState.visible,
    selected: oldFont.currentState.selected,
    selectedVariants: Object.assign({}, oldFont.currentState.selectedVariants),
    selectedSubsets: Object.assign({}, oldFont.currentState.selectedSubsets),
    size: oldFont.currentState.size,
    sampleText: oldFont.currentState.sampleText,
    sampleType: oldFont.currentState.sampleType,
    previewVariants: Object.assign({}, oldFont.currentState.previewVariants)
  };
}
