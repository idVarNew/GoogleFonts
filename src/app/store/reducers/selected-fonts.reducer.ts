import * as AppActions from '../actions';

import { SingleFont } from '../../shared/models/font.model';

export function SelectedFontsState(state : Array<SingleFont>= [], action) : Array<SingleFont>{
  switch (action.type) {
    case AppActions.ADD_TO_SELECTED_FONTS:
      return [...state, action.payload];
    case AppActions.REMOVE_SELECTED_FONT:
    if(action.payload === null){
      return []
    }else{
      return state.filter((font: SingleFont) => {
      return font.family !== action.payload;
      });
    }
    default:
      return state;
  }
}
