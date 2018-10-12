import { SingleFont, UI, Filtered } from '../shared/models/font.model';

export interface AppState {
  dataState: Array<SingleFont>;
  uiState: UI;
  filterFontsState: Filtered ;
  cachedFonts: Array<SingleFont>;
  selectedFontsState: Array<SingleFont>
}

const initialUIState: UI = {
  isChangesMade: false,
  fonstPerPage: 15,
  selectedLangSubsets: [],
  isNumberOfStylesChecked: false
};

const initialfilterFontsStateState: Filtered   =  {
    category: 'all',
    sorting: 'alpha',
    language: 'latin',
    styles: 0
  }
  
export const State: AppState = {
  filterFontsState: initialfilterFontsStateState,
  dataState: [],
  uiState: initialUIState,
  cachedFonts: [],
  selectedFontsState: []
};
