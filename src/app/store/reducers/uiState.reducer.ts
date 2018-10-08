import * as AppActions from '../actions';
import { State } from '../app.state';
import { UI } from '../../shared/models/font.model';

export function UIState(state: UI = State.uiState, action: AppActions.UIActions): UI {
  switch (action.type) {
    case AppActions.LOAD_MORE_FONTS:
      return {
        ...state,
        fonstPerPage: state.fonstPerPage + 12
      };
    case AppActions.FILTER_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case AppActions.SELECT_SUBSET:
      return {
        ...state,
        selectedLangSubsets: [...state.selectedLangSubsets, action.payload]
      };
    case AppActions.DESELECT_SUBSET:
      return {
        ...state,
        selectedLangSubsets: state.selectedLangSubsets.filter(subset => subset !== action.payload)
      };
    case AppActions.RESET_ALL_FONTS_SETTINGS:
      return {
        isChangesMade: false,
        fonstPerPage: 12,
        selectedCategory: 'all',
        selectedLanguage: 'latin',
        selectedLangSubsets: [],
        isNumberOfStylesChecked: false,
        sorting: 'alpha'
      };
    case AppActions.SORTED_BY_METHOD:
      return {
        ...state,
        sorting: action.payload.sortedBy
      };
    case AppActions.FILTER_LANGUAGES:
      return {
        ...state,
        selectedLanguage: action.payload
      };
    case AppActions.IS_NUMBER_OF_STYLES_CHECKED:
      return {
        ...state,
        isNumberOfStylesChecked: !state.isNumberOfStylesChecked
      };
    case AppActions.IS_CHANGES_MADE:
      return {
        ...state,
        isChangesMade: true
      };
    default:
      return state;
  }
}
