import * as AppActions from '../actions';
import { State } from '../app.state';

export function FilterFonts(state = State.filterFonts, action) {
  switch (action.type) {
    case AppActions.FILTER_CATEGORIES:
      return {
        ...state,
        category: action.payload
      };
    case AppActions.SORT_FONTS:
      return {
        ...state,
        sorting: action.payload
      };
    case AppActions.FILTER_LANGUAGES:
      return {
        ...state,
        language: action.payload
      };
      case AppActions.FILTER_NUMBER_OF_STYLES:
      return {
        ...state,
       styles: action.payload
      };
    default:
      return state;
  }
}
