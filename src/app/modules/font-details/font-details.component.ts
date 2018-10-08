import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GooglefontsService } from '../../core/services/googlefonts.service';
import { SingleFont } from '../../shared/models/font.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { switchMap, tap, map } from 'rxjs/operators';
import * as AppActions from '../../store/actions';

@Component({
  selector: 'app-font-details',
  templateUrl: './font-details.component.html',
  styleUrls: ['./font-details.component.scss']
})
export class FontdetailsComponent implements OnInit {
  font: SingleFont;
  fontSize = 28;
  fontWeights: Array<string> = [];
  fontWeight = 400;
  fontStyles: Array<string> = [];
  fontStyle = 'normal';

  constructor(
    private activeRoute: ActivatedRoute,
    private googlefontsService: GooglefontsService,
    private store: Store<AppState>
  ) {}

  showCurrentSize(value) {
    this.fontSize = value;
  }

  ngOnInit() {
    this.activeRoute.paramMap
      .pipe(
        switchMap((param: ParamMap) => {
          return this.store.select('dataState').pipe(
            map((fonts: Array<SingleFont>) => {
              return fonts.filter((font: SingleFont) => {
                if (font.family === param.get('familyName')) {
                  return font;
                }
              })[0];
            }),
            tap((font: SingleFont) => {
              if (font) {
                this.googlefontsService.loadWebFont(font);
              }
            })
          );
        })
      )
      .subscribe((font: SingleFont) => {
        this.font = font;
        if (font) {
          this.divideVariants();
        }
      });
  }

  selectWeight(value: number) {
    this.fontWeight = value;
  }

  selectStyle(value: string) {
    this.fontStyle = value;
  }

  divideVariants(): void {
    this.fontStyles = this.googlefontsService.getStyles(this.font);
    this.fontWeights = this.googlefontsService.getWeights(this.font);
  }

  selectFont(font: SingleFont) {
    this.store.dispatch(new AppActions.addToSelectedFonts(font));
    this.store.dispatch(new AppActions.selectFontVariants({variant: 'regular', family: font.family}));
    this.store.dispatch(new AppActions.selectLanguage({subset: 'latin', family:font.family}));
  }
}
