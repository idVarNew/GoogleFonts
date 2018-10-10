import { Action } from '@ngrx/store';

export const SELECT_SUBSET = 'SELECT_SUBSET';
export const DESELECT_SUBSET = ' DESELECT_SUBSET';
export const LOAD_MORE_FONTS = 'LOAD_MORE_FONTS';
export const IS_NUMBER_OF_STYLES_CHECKED = 'IS_NUMBER_OF_STYLES_CHECKED';
export const IS_CHANGES_MADE = 'IS_CHANGES_MADE';
export const RESET_ALL_FONTS_SETTINGS = 'RESET_ALL_FONTS_SETTINGS';

export class loadMoreFonts implements Action {
  readonly type = LOAD_MORE_FONTS;
}

export class selectSubset implements Action {
  readonly type = SELECT_SUBSET;
  constructor(public payload: string) {}
}

export class deselectSubset implements Action {
  readonly type = DESELECT_SUBSET;
  constructor(public payload: string) {}
}

export class resetAllFontsSettings implements Action {
  readonly type = RESET_ALL_FONTS_SETTINGS;
  constructor(public payload: string) {}
}

export class toogleNumberOfstyles implements Action {
  readonly type = IS_NUMBER_OF_STYLES_CHECKED;
}

export class isChangesMade implements Action {
  readonly type = IS_CHANGES_MADE;
}

export type UIActions =
  | loadMoreFonts
  | selectSubset
  | deselectSubset
  | resetAllFontsSettings
  | toogleNumberOfstyles
  | isChangesMade;
