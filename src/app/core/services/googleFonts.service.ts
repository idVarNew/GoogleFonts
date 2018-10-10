import { Injectable, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import WebFont from 'webfontloader';
import { map } from 'rxjs/operators';
import { SingleFont } from '../../shared/models/font.model';

@Injectable({
  providedIn: 'root'
})
export class GooglefontsService {
  fontLoader = true;
  fonts;

  constructor(private http: HttpClient) {}

  getFonts(sortKey, category?, language?, styles?): Observable<Array<SingleFont>> {
    const url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCnpIgKkKjoW4Bl-4AynZy5j2TKP6aK2Jc' + sortKey;

    return this.http.get<any>(url).pipe(
      map((data: any) => {
        const fonts: Array<SingleFont> = data.items.map(
          (font: SingleFont): SingleFont => {
            font.currentState = {
              current: false,
              selected: false,
              selectedVariants: {},
              selectedSubsets: {},
              previewVariants: {
                weight: 400,
                style: 'normal'
              },
              size: 38,
              sampleText: 'Angular',
              sampleType: 'word'
            };
            font.variants.forEach((variant: string) => {
              font.currentState.selectedVariants[variant] = false;
            });

            font.subsets.forEach((subset: string) => {
              font.currentState.selectedSubsets[subset] = false;
            });
            return font;
          }
        );
        const filterdByCategoryFonts: Array<SingleFont> = this.getFilteredByCategory(fonts, category);
        const filterdByLanguageFonts: Array<SingleFont> = this.getFilteredByLanguage(filterdByCategoryFonts, language);

        if (styles) {
          return this.getFilteredByStyles(filterdByLanguageFonts, styles);
        } else {
          return this.getFilteredByLanguage(filterdByCategoryFonts, language);
        }
      })
    );
  }
  getFilteredByStyles(fonts: Array<SingleFont> , styles: number): Array<SingleFont> {
    return fonts.filter((font: SingleFont)  => {
      const numVariants = font.variants.length;
      return styles < numVariants;
    });
  }

  getFilteredByLanguage(fonts: Array<SingleFont>, language: string): Array<SingleFont> {
    return fonts.filter((font: SingleFont)  => {
      if (font.subsets.indexOf(language) > -1) {
        return font;
      }
    });
  }

  getFilteredByCategory(fonts: Array<SingleFont>, category: string):  Array<SingleFont>{
    if (category === 'all') {
      return fonts;
    } else if (category === 'sans-serif') {
      return fonts.filter((font: SingleFont)  => {
        return font.category === 'sans-serif';
      });
    } else if (category === 'serif') {
      return fonts.filter((font: SingleFont)  => {
        return font.category === 'serif';
      });
    } else if (category === 'display') {
      return fonts.filter((font: SingleFont)  => {
        return font.category === 'display';
      });
    } else if (category === 'handwriting') {
      return fonts.filter((font: SingleFont)  => {
        return font.category === 'handwriting';
      });
    } else if (category === 'monospace') {
      return fonts.filter((font: SingleFont)  => {
        return font.category === 'monospace';
      });
    } else {
      return fonts;
    }
  }

  loadWebFonts(fonts: Array<SingleFont>, fonstPerPage: number): void {
    this.generateWebFontLink();

    const links = [];

    fonts.forEach((font: SingleFont, i: number) => {
      if (i < fonstPerPage) {
        let variants = font.variants.map(variant => {
          return variant;
        });

        const link = `${font.family}:${variants.join(',')}`;
        links.push(link);
      }
    });

    WebFont.load({
      classes: false,
      google: {
        families: links,
        timeout: 3000
      }
    });
  }

  loadWebFont(font: SingleFont): void {
    this.generateWebFontLink();

    let variants = font.variants.map(variant => {
      return variant;
    });

    const link = `${font.family}:${variants.join(',')}`;

    WebFont.load({
      events: false,
      google: {
        families: [link],
        timeout: 2000
      }
    });
  }

  generateWebFontLink(): void {
    const links: Array<HTMLElement> = Array.from(document.getElementsByTagName('link')),
      head = document.getElementsByTagName('head')[0];

    links.forEach((item: HTMLElement) => {
      const element: string = item.getAttribute('href');
      if (element.includes('googleapis')) {
        head.removeChild(item);
      }
    });
  }

  getStyles(font): Array<string> {
    let fontStyles = font.variants.filter((variant: string) => {
      if (Number.isNaN(parseFloat(variant))) {
        return variant;
      }
    });
    fontStyles = fontStyles.map((style: string) => {
      if (style === 'regular') {
        return 'normal';
      } else {
        return style;
      }
    });
    return fontStyles;
  }

  getWeights(font): Array<string> {
    let fontWeights = font.variants.filter((variant: string) => {
      if (Number(variant) || variant === 'regular') {
        return variant;
      }
    });
    fontWeights = fontWeights.map((weight: string) => {
      if (weight === 'regular') {
        return '400';
      } else {
        return weight;
      }
    });
    return fontWeights;
  }

  combineWeightsStyles(fontWeights, fontStyles) {
    const combine = [];
    fontWeights.forEach(weight => {
      combine.push({
        style: 'normal',
        weight: weight
      });

      if (fontStyles.includes('italic')) {
        combine.push({
          style: 'italic',
          weight: weight
        });
      }
    });
    return combine;
  }
}
