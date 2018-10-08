import { Action } from '@ngrx/store';
import { SingleFont, UI } from '../../shared/models/font.model';

export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';
export const SORTED_BY = 'SORTED_BY';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
export const LOAD_DATA = 'LOAD_DATA';
export const USE_CUSTOM_TEXT_AS_SAMPLE = 'USE_CUSTOM_TEXT_AS_SAMPLE';
export const SAMPLE_TEXT_TYPE = 'SAMPLE_TEXT_TYPE';
export const ADD_TO_SELECTED_FONTS = 'ADD_TO_SELECTED_FONTS';
export const REMOVE_SELECTED_FONT = 'REMOVE_SELECTED_FONT';
export const SELECT_VARIANTS = 'SELECT_VARIANTS';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const APPLY_TO_ALL_FONTS = 'APPLY_TO_ALL_FONTS';
export const TEXT_TYPE = 'TEXT_TYPE';
export const CHANGE_ACTIVE_FONTS = 'CHANGE_ACTIVE_FONTS';
export const SEARCH_FONTS = 'SEARCH_FONTS';
export const CHANGE_VISIBLE_FONTS = 'CHANGE_VISIBLE_FONTS';
export const RESET_SAMPLE_TEXT = 'RESET_SAMPLE_TEXT';
export const SELECT_VARINAT_TO_PREVIEW = 'SELECT_VARINAT_TO_PREVIEW';
export const FILTER_NUMBER_OF_STYLES = 'FILTER_NUMBER_OF_STYLES';

export class loadInitialData implements Action {
  readonly type = LOAD_INITIAL_DATA;
}

export class sortFonts implements Action {
  readonly type = SORTED_BY;
  constructor(public sortedBy: string) {}
}

export class changeFontSize implements Action {
  readonly type = CHANGE_FONT_SIZE;
  constructor(public payload: { family: string; value: number }) {}
}

export class loadData implements Action {
  readonly type = LOAD_DATA;
  constructor(public payload: Array<SingleFont>) {}
}

export class useCustomTextAsSample implements Action {
  readonly type = USE_CUSTOM_TEXT_AS_SAMPLE;
  constructor(public payload: string) {}
}

export class changeSampleText implements Action {
  readonly type = SAMPLE_TEXT_TYPE;
  constructor(public payload: { family: string; sampleText: string; sampleType: string }) {}
}

export class addToSelectedFonts implements Action {
  readonly type = ADD_TO_SELECTED_FONTS;
  constructor(public payload: SingleFont) {}
}

export class removeFromSelectedFonts implements Action {
  readonly type = REMOVE_SELECTED_FONT;
  constructor(public payload: string) {}
}

export class selectFontVariants implements Action {
  readonly type = SELECT_VARIANTS;
  constructor(public payload: {variant: string, family: string}) {}
}

export class selectLanguage implements Action {
  readonly type = SELECT_LANGUAGE;
  constructor(public payload: {subset: string,  family: string}) {}
}

export class applyToAllFonts implements Action {
  readonly type = APPLY_TO_ALL_FONTS;
  constructor(public payload: {sampleText: string,  fontSize: number, sampleType: string}) {}
}

export class changeActiveFonts implements Action {
  readonly type = CHANGE_ACTIVE_FONTS;
  constructor(public payload: string) {}
}

export class searchFonts implements Action {
  readonly type = SEARCH_FONTS;
  constructor(public payload: {query: string,  sortedBy: string}) {}
}

export class changeVisibleFonts implements Action {
  readonly type = CHANGE_VISIBLE_FONTS;
  constructor(public payload: string) {}
}
export class resetSampleText implements Action {
  readonly type = RESET_SAMPLE_TEXT;
}

export class selectVariantToPreview implements Action {
  readonly type = SELECT_VARINAT_TO_PREVIEW;
  constructor(public payload: {family, weight, style}) {}
}

export class filterNumberOfStyles implements Action {
  readonly type = FILTER_NUMBER_OF_STYLES;
  constructor(public payload) {}
}

export type DataActions =
  | changeFontSize
  | loadData
  | useCustomTextAsSample
  | changeSampleText
  | addToSelectedFonts
  | removeFromSelectedFonts
  | selectFontVariants
  | selectLanguage
  | applyToAllFonts
  | changeActiveFonts
  | searchFonts
  | changeVisibleFonts
  | resetSampleText
  | selectVariantToPreview
  | filterNumberOfStyles;
