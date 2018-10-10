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
        selectedLangSubsets: [],
        isNumberOfStylesChecked: false
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
