
import { filterFontsState } from './filter-fonts.reducer';
import { CacheFonts } from './cached-fonts.reducer';
import { UIState } from './ui.reducer';
import { DataState } from './data.reducer';
import { SelectedFontsState } from './selected-fonts.reducer';


export const reducers ={
    dataState: DataState,
    uiState: UIState,
    filterFontsState: filterFontsState,
    cacheFontsState: CacheFonts,
    selectedFontsState: SelectedFontsState
}