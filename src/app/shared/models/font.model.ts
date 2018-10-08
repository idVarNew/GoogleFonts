

export class UI1 {
    isChangesMade: boolean
    fonstPerPage: 9
    selectedCategory: "all"
    selectedLangSubsets: Array<string>
    selectedLanguage: string
    sorting: string
    isNumberOfStylesChecked: boolean
}

export class UI{
    isChangesMade: boolean
    fonstPerPage: number
    selectedCategory: string
    selectedLanguage: string
    selectedLangSubsets: Array<string>
    sorting: string
    isNumberOfStylesChecked: boolean
}
export class SingleFont {
    kind: string;
    family: string;
    category: string;
    variants: Array<string>;
    subsets: Array<string>;
    version: string;
    lastModified: string;
    files: { [key: string]: string };
    currentState: {
        current: boolean,
        visible: boolean,
        selected: boolean,
        selectedVariants: { [key: string]: boolean },
        selectedSubsets: { [key: string]: boolean },
        previewVariants: {
            weight: number,
            style: string
          },
        size: number,
        sampleText: string,
        sampleType: string

    };

}

/*
{
   "kind": "webfonts#webfont",
   "family": "ABeeZee",
   "category": "sans-serif",
   "variants": [
    "regular",
    "italic"
   ],
   "subsets": [
    "latin"
   ],
   "version": "v11",
   "lastModified": "2017-10-10",
   "files": {
    "regular": "http://fonts.gstatic.com/s/abeezee/v11/esDR31xSG-6AGleN6tI.ttf",
    "italic": "http://fonts.gstatic.com/s/abeezee/v11/esDT31xSG-6AGleN2tCklQ.ttf"
   }
  }

*/