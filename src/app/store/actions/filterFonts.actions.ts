import { Action } from '@ngrx/store';

export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';
export const SORT_FONTS = 'SORT_FONTS';
export const FILTER_LANGUAGES = 'FILTER_LANGUAGES';
export const SEARCH_FONTS = 'SEARCH_FONTS';
export const FILTER_NUMBER_OF_STYLES = 'FILTER_NUMBER_OF_STYLES';


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
export type Actions = filterByCategory | getSorted | filterByLanguage | searchFonts | filterByNumberOfStyles
