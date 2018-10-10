import * as AppActions from '../actions';
import { SingleFont } from '../../shared/models/font.model';
import { State} from '../app.state';

export function CacheFonts(state: Array<SingleFont> = State.cachedFonts, action): Array<SingleFont> {
  switch (action.type) {
    case AppActions.CACHE_FONTS:
      return [].concat(action.payload);
        
      case AppActions.CHANGE_FONT_SIZE:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {
          font.currentState.size = action.payload.value;
          return font;
        } else {
          return font;
        }
      });
    case AppActions.ADD_TO_SELECTED_FONTS:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {         
          font.currentState.selected = !font.currentState.selected;
          return font;
        } else {
          return font;
        }
      });
    case AppActions.USE_CUSTOM_TEXT_AS_SAMPLE:
      return state.map((font: SingleFont) => {
        font.currentState.sampleText = action.payload;
        font.currentState.sampleType = "custom"
        return font;
      });
    case AppActions.SAMPLE_TEXT_TYPE:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {
          font.currentState.sampleText = action.payload.sampleText;
          font.currentState.sampleType = action.payload.sampleType;
          return font;
        } else {
          return font;
        }
      });
    case AppActions.REMOVE_SELECTED_FONT:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload) {
          font.currentState.selected = false;
          font.variants.forEach((variant: string) => {
            font.currentState.selectedVariants[variant] = false;
          });
          font.subsets.forEach((subset: string) => {
            font.currentState.selectedSubsets[subset] = false;
          });
          return font;
        } else if (action.payload === null) {
          font.currentState.selected = false;
          return font;
        } else {
          return font;
        }
      });
    case AppActions.SELECT_VARIANTS:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {
          font.currentState.selectedVariants = {
            ...font.currentState.selectedVariants,
            [action.payload.variant]: !font.currentState.selectedVariants[action.payload.variant]
          };
          return font;
        } else {
          return font;
        }
      });
    case AppActions.SELECT_LANGUAGE:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {
          font.currentState.selectedSubsets = {
            ...font.currentState.selectedSubsets,
            [action.payload.subset]: !font.currentState.selectedSubsets[action.payload.subset]
          };
          return font;
        } else {
          return font;
        }
      });

    case AppActions.SELECT_SUBSET:
      return state.map((font: SingleFont) => {
        if (font.currentState.selected === true) {
          font.currentState.selectedSubsets = {
            ...font.currentState.selectedSubsets,
            [action.payload]: !font.currentState.selectedSubsets[action.payload]
          };
          return font;
        } else {
          return font;
        }
      });
    case AppActions.DESELECT_SUBSET:
      return state.map((font: SingleFont) => {
        if (font.currentState.selected === true) {
          font.currentState.selectedSubsets = {
            ...font.currentState.selectedSubsets,
            [action.payload]: false
          };
          return font;
        } else {
          return font;
        }
      });
    case AppActions.APPLY_TO_ALL_FONTS:
      return state.map((font: SingleFont) => {
        font.currentState.sampleText = action.payload.sampleText;
        font.currentState.sampleType = action.payload.sampleType;
        font.currentState.size = action.payload.fontSize;
        return font;
      });
    case AppActions.RESET_ALL_FONTS_SETTINGS:
      return state.map((font: SingleFont) => {
        font.currentState.size = 28;
        font.currentState.sampleText = 'Angular';
        font.currentState.sampleType = 'word';
        font.currentState.current = false;
      //  font.currentState.visible = true;
        font.currentState.selectedVariants = {};
        font.currentState.selectedSubsets = {};
        font.currentState.previewVariants = {
          weight: 400,
          style: 'normal'
        };
        return font;
      });
    case AppActions.RESET_SAMPLE_TEXT:
      return state.map((font: SingleFont) => {
        font.currentState.sampleText = 'Angular';
        font.currentState.sampleType = 'word';
        return font;
      });

    case AppActions.CHANGE_ACTIVE_FONTS:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload) {
          font.currentState.current = true;
        } else {
          font.currentState.current = false;
        }
        return font;
      });
    case AppActions.SELECT_VARINAT_TO_PREVIEW:
      return state.map((font: SingleFont) => {
        if (font.family === action.payload.family) {
          font.currentState.previewVariants = {
            style: action.payload.style,
            weight: action.payload.weight
          };
          return font;
        } else {
          return font;
        }
      });
    default:
      return state;
  }
}

