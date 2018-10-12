import { Action } from '@ngrx/store';
import { SingleFont, UI } from '../../shared/models/font.model';

export const LOAD_INITIAL_DATA = '[fonts] LOAD_INITIAL_DATA';
export const GET_FONTS = '[fonts] GET_FONTS';
export const LOAD_DATA = '[fonts] LOAD_DATA';
export const USE_CUSTOM_TEXT_AS_SAMPLE = '[options] USE_CUSTOM_TEXT_AS_SAMPLE';
export const RESET_SAMPLE_TEXT = '[options] RESET_SAMPLE_TEXT';
export const CHANGE_FONT_SIZE = '[cart] CHANGE_FONT_SIZE';
export const SET_SAMPLE_TEXT = '[cart] SET_SAMPLE_TEXT';
export const APPLY_TO_ALL_FONTS = '[cart] APPLY_TO_ALL_FONTS';
export const CHANGE_ACTIVE_FONTS = '[cart] CHANGE_ACTIVE_FONTS';
export const SELECT_VARINAT_TO_PREVIEW = '[cart] SELECT_VARINAT_TO_PREVIEW';
export const ADD_TO_SELECTED_FONTS = '[shared_button] ADD_TO_SELECTED_FONTS';
export const REMOVE_SELECTED_FONT = '[shared_button] REMOVE_SELECTED_FONT';
export const SELECT_VARIANTS = '[selected] SELECT_VARIANTS';
export const DESELECT_VARIANTS = '[selected] DESELECT_VARIANTS';
export const SELECT_LANGUAGE = '[selected] SELECT_LANGUAGE';

export class loadInitialData implements Action {
  readonly type = LOAD_INITIAL_DATA;
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
  readonly type = SET_SAMPLE_TEXT;
  constructor(public payload: { family: string; sampleText: string; sampleType: string }) {}
}

export class addToSelected implements Action {
  readonly type = ADD_TO_SELECTED_FONTS;
  constructor(public payload: SingleFont) {}
}

export class removeFromSelectedFonts implements Action {
  readonly type = REMOVE_SELECTED_FONT;
  constructor(public payload: string) {}
}

export class selectFontVariants implements Action {
  readonly type = SELECT_VARIANTS;
  constructor(public payload: { variant: string; family: string }) {}
}
export class deselectFontVariants implements Action {
  readonly type = DESELECT_VARIANTS;
  constructor(public payload: { variant: string; family: string }) {}
}

export class selectLanguage implements Action {
  readonly type = SELECT_LANGUAGE;
  constructor(public payload: { subset: string; family: string }) {}
}

export class applyToAllFonts implements Action {
  readonly type = APPLY_TO_ALL_FONTS;
  constructor(public payload: { sampleText: string; fontSize: number; sampleType: string }) {}
}

export class changeActiveFonts implements Action {
  readonly type = CHANGE_ACTIVE_FONTS;
  constructor(public payload: string) {}
}

export class resetSampleText implements Action {
  readonly type = RESET_SAMPLE_TEXT;
}

export class selectVariantToPreview implements Action {
  readonly type = SELECT_VARINAT_TO_PREVIEW;
  constructor(public payload: { family; weight; style }) {}
}

export class getFonts implements Action {
  readonly type = GET_FONTS;
}

export type DataActions =
  | changeFontSize
  | loadData
  | useCustomTextAsSample
  | changeSampleText
  | removeFromSelectedFonts
  | selectFontVariants
  | selectLanguage
  | applyToAllFonts
  | changeActiveFonts
  | resetSampleText
  | selectVariantToPreview
  | getFonts
  | addToSelected
  | deselectFontVariants;
