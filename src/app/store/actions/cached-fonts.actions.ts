import { Action } from '@ngrx/store';
import { SingleFont, UI } from '../../shared/models/font.model';

export const CACHE_FONTS = '[cached] CACHE_FONTS';

export class cache implements Action {
  readonly type = CACHE_FONTS;
  constructor(public payload: Array<SingleFont>) {
  }
}

export type CacheActions =  cache
