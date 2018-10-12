import { Action } from '@ngrx/store';

export const FILTER_CATEGORIES = '[filters] FILTER_CATEGORIES';
export const SORT_FONTS = '[filters] SORT_FONTS';
export const FILTER_LANGUAGES = '[filters] FILTER_LANGUAGES';
export const SEARCH_FONTS = '[filters] SEARCH_FONTS';
export const FILTER_NUMBER_OF_STYLES = '[filters] FILTER_NUMBER_OF_STYLES';


export class filterByCategory implements Action {
  readonly type = FILTER_CATEGORIES;
  constructor(public payload: string) {}
}
export class getSorted implements Action {
  readonly type = SORT_FONTS;
  constructor(public payload: string) {}
}
export class filterByLanguage implements Action {
  readonly type = FILTER_LANGUAGES;
  constructor(public payload: string) {}
}

export class searchFonts implements Action {
  readonly type = SEARCH_FONTS;
  constructor(public payload: string) {}
}
export class filterByNumberOfStyles implements Action {
  readonly type = FILTER_NUMBER_OF_STYLES;
  constructor(public payload: number) {}
}
export type ActionsFilter = filterByCategory | getSorted | filterByLanguage | searchFonts | filterByNumberOfStyles
