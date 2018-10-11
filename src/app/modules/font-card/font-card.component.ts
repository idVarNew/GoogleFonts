import { Component, Output, EventEmitter, Input, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GooglefontsService } from '../../core/services/googlefonts.service';
import { TextFiltersService } from '../../core/services/textFilters.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/actions';
import { SingleFont, UI } from '../../shared/models/font.model';

@Component({
  selector: 'app-font-card',
  templateUrl: './font-card.component.html',
  styleUrls: ['./font-card.component.scss']
})
export class FontCardComponent implements OnInit {
  word = '';
  currentSampleText = '';
  combineVariants = [];
  fontWeights: Array<string>;
  fontWeight = 400;
  fontStyles: Array<string>;
  fontStyle = 'normal';

  constructor(
    private googlefontsService: GooglefontsService,
    private store: Store<AppState>,
    private textFiltersService: TextFiltersService,
    private renderer: Renderer2
  ) {}

  @Input()
  font: SingleFont;
  @Input()
  i: number;

  @Output()
  layout = new EventEmitter<void>();
  @Output()
  selectToPreviewEE = new EventEmitter<any>();

  @ViewChild('fontPreview')
  fontPreview;

  ngOnInit() {
    this.divideVariants();
  }

  selectVariantToPreview(value: string) {
    this.selectToPreviewEE.emit();

    const weight = parseFloat(value),
      partToRemove = `${weight},`,
      style = value.replace(partToRemove, '');

    this.store.dispatch(new AppActions.selectVariantToPreview({family: this.font.family,  weight, style}));
  }

  divideVariants() {
    this.fontStyles = this.googlefontsService.getStyles(this.font);
    this.fontWeights = this.googlefontsService.getWeights(this.font);
    this.combineVariants = this.googlefontsService.combineWeightsStyles(this.fontWeights, this.fontStyles);
  }

  applyToAllFonts(sampleText: string, fontSize: number, sampleType: string) {
    this.store.dispatch(new AppActions.changeActiveFonts(''));
    this.store.dispatch(new AppActions.applyToAllFonts({sampleText, fontSize, sampleType}));

    this.layout.emit(null);
  }

  changeFontSize(event: { family: string; fontSize: number }) {
    this.store.dispatch(new AppActions.changeActiveFonts(event.family));
    this.store.dispatch(new AppActions.changeFontSize({ family: event.family, value: event.fontSize }));
    this.layout.emit(null);
  }

  selectSampleText(event: { sampleType: string; family: string }) {
    const sampleType = event.sampleType,
      family = event.family;

    this.layout.emit(null);
    this.store.dispatch(new AppActions.changeActiveFonts(family));

    const paragraph =
        'Res enim se praeclare habebat, et quidem in utraque parte. Rationis enim   perfectio est virtus; Commentarios quosdam, inquam, Aristotelios, quos hic sciebam esse, veni ut auferrem, quos legerem, dum essem otiosus; Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L. Quod quidem iam fit etiam in Academia. ',
      word = 'Angular',
      sentence = 'Ala ma kota',
      numerals = '123456789',
      polishLetters = 'ąęłóżźćśń';

    switch (sampleType) {
      case 'paragraph':
        this.store.dispatch(
          new AppActions.changeSampleText({ family: this.font.family, sampleText: paragraph, sampleType: 'paragraph' })
        );
        this.currentSampleText = paragraph;
        break;
      case 'word':
        this.store.dispatch(
          new AppActions.changeSampleText({ family: this.font.family, sampleText: word, sampleType: 'word' })
        );
        this.currentSampleText = word;
        break;
      case 'sentence':
        this.store.dispatch(
          new AppActions.changeSampleText({ family: this.font.family, sampleText: sentence, sampleType: 'sentence' })
        );
        this.currentSampleText = sentence;
        break;
      case 'numerals':
        this.store.dispatch(
          new AppActions.changeSampleText({ family: this.font.family, sampleText: numerals, sampleType: 'numerals' })
        );
        this.currentSampleText = numerals;
        break;
      case 'polishLetters':
        this.store.dispatch(
          new AppActions.changeSampleText({
            family: this.font.family,
            sampleText: polishLetters,
            sampleType: 'polishLetters'
          })
        );
        this.currentSampleText = polishLetters;
        break;
      case 'custom':
        this.store.dispatch(
          new AppActions.changeSampleText({ family: this.font.family, sampleText: '', sampleType: 'custom' })
        );
        this.currentSampleText = '';
        this.fontPreview.focusCustomText();
        break;

      default:
        new AppActions.changeSampleText({ family: this.font.family, sampleText: word, sampleType: 'word' });
    }
  }
  selectFont(font: SingleFont) {
    this.store.dispatch(new AppActions.addToSelectedFonts(font));
    this.store.dispatch(new AppActions.selectFontVariants({variant: 'regular', family:font.family}));
    this.store.dispatch(new AppActions.selectLanguage({subset: 'latin', family: font.family}));
  }
}
