import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/actions';
import { map } from 'rxjs/operators';
import { SingleFont, UI } from '../../shared/models/font.model';

@Component({
  selector: 'app-selected-fonts',
  templateUrl: './selected-fonts.component.html',
  styleUrls: ['./selected-fonts.component.scss']
})
export class SelectedFontsComponent implements OnInit {
  path = '';
  selectedFonts: Array<SingleFont>;
  cssLink = '';
  cssImportCode = '';
  subsets: Array<string> = [];
  selectedLangSubsets: Array<string> = [];

  constructor(private store: Store<AppState>, private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.path = this.location.path();
    });

    this.store
      .select('dataState')
      .pipe(
        map((fonts: Array<SingleFont>) => {
          return fonts.filter((font: SingleFont) => {
            return font.currentState.selected === true;
          });
        })
      )
      .subscribe((fonts: Array<SingleFont>) => {
        this.selectedFonts = fonts;
      });

    this.generateLink();
  }

  removeFromSelectedFonts(family: string): void {
    this.store.dispatch(new AppActions.removeFromSelectedFonts(family));
    this.generateLink();
  }

  generateLink(): void {
    const languages = this.generateLanguages(),
      fontsVariants = this.generateVariants();

    this.cssLink = `<link href="https://fonts.googleapis.com/css?family${fontsVariants}${languages} " rel="stylesheet">`;
    this.cssImportCode = `@import url('https://fonts.googleapis.com/css?family${fontsVariants}${languages}')`;
  }

  generateLanguages(): string {
    let languages = '';

    this.store.pipe(select('uiState')).subscribe((ui: UI) => {
      this.selectedLangSubsets = ui.selectedLangSubsets;
    });

    this.selectedFonts.forEach((font: SingleFont) => {
      font.subsets.forEach((subset: string) => {
        if (this.subsets.indexOf(subset) === -1) {
          this.subsets.push(subset);
        }
      });
    });

    if (this.selectedLangSubsets.length > 0) {
      languages = `&subset=${this.selectedLangSubsets.join(',')}`;
    } else {
      languages = ``;
    }

    return languages;
  }

  generateVariants(): string {
    let fontsVariants = '=';

    this.selectedFonts.forEach((font: SingleFont) => {
      const allSelectedVariants: Array<string> = font.variants.filter((variant: string) => {
        return font.currentState.selectedVariants[variant] === true;
      });

      if (allSelectedVariants.length > 0) {
        fontsVariants = fontsVariants + '|' + font.family + ':';
      }

      font.variants.forEach((variant: string) => {
        if (font.currentState.selectedVariants[variant] === true) {
          fontsVariants = fontsVariants + variant + ',';
        }
      });
    });

    fontsVariants = fontsVariants.replace(/:regular,/g, ':');
    fontsVariants = fontsVariants.replace(/(:\|)|(,\|)/g, '|');
    fontsVariants = fontsVariants.replace(/=\|/g, '=');

    if (fontsVariants[fontsVariants.length - 1] === ',' || fontsVariants[fontsVariants.length - 1] === ':') {
      fontsVariants = fontsVariants.substring(0, fontsVariants.length - 1);
    }

    return fontsVariants;
  }

  selectSubset(event): void {
    if (!event.event.target.checked) {
      this.store.dispatch(new AppActions.deselectSubset(event.subset));
    } else {
      if (this.selectedLangSubsets.indexOf(event.subset) === -1) {
        this.store.dispatch(new AppActions.selectSubset(event.subset));
      }
    }
    this.generateLink();
  }

  selectVariant(event): void {
    this.store.dispatch(new AppActions.selectFontVariants({variant: event.variant, family: event.font.family}));
    this.generateLink();
  }
}
