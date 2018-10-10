import { SingleFont, UI, Filtered } from '../shared/models/font.model';

export interface AppState {
  dataState: Array<SingleFont>;
  uiState: UI;
  filterFonts: Filtered ;
  cachedFonts: Array<SingleFont>;
}

const initialUIState: UI = {
  isChangesMade: false,
  fonstPerPage: 15,
  selectedLangSubsets: [],
  isNumberOfStylesChecked: false
};

const initialFilterFontsState: Filtered   =  {
    category: 'all',
    sorting: 'alpha',
    language: 'latin',
    styles: 0
  }
  
export const State: AppState = {
  filterFonts: initialFilterFontsState,
  dataState: [],
  uiState: initialUIState,
  cachedFonts: []
};
