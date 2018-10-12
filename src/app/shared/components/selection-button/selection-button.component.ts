import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../models/font.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as AppActions from '../../../store/actions';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements OnInit {
  @Input()
  font;
  @Output()
  selectEE = new EventEmitter<SingleFont>();
  @Input()
  size;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addFontToSelected(font: SingleFont) {
    this.store.dispatch(new AppActions.addToSelected(font));
    this.store.dispatch(new AppActions.selectFontVariants({ variant: 'regular', family: font.family }));
    this.store.dispatch(new AppActions.selectLanguage({ subset: 'latin', family: font.family }));
  }
  removeFontFromSelected(font: SingleFont) {
    this.store.dispatch(new AppActions.removeFromSelectedFonts(font.family));
  }
}
