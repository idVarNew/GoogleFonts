import * as AppActions from '../actions';
import { Filtered } from '../../shared/models/font.model';
import { State } from '../app.state';

export function FilterFonts(state: Filtered = State.filterFonts, action: AppActions.ActionsFilter): Filtered {
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
