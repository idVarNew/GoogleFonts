
import { SingleFont, UI } from '../shared/models/font.model';

export interface AppState {
    dataState: Array<SingleFont>,
    uiState: UI,
}

const initialUIState : UI = {
    isChangesMade: false,
    fonstPerPage: 15,
    selectedCategory: "all",
    selectedLanguage: "latin",
    selectedLangSubsets: [],
    sorting: "alpha",
    isNumberOfStylesChecked: false
}


export const State: AppState  = {
    dataState: [],
    uiState: initialUIState,
}



