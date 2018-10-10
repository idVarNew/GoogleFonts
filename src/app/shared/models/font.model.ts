export class Filtered {
  category: string;
  sorting: string;
  language: string;
  styles: number;
}

export class UI {
  isChangesMade: boolean;
  fonstPerPage: number;
  selectedLangSubsets: Array<string>;
  isNumberOfStylesChecked: boolean;
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
    current: boolean;
    selected: boolean;
    selectedVariants: { [key: string]: boolean };
    selectedSubsets: { [key: string]: boolean };
    previewVariants: {
      weight: number;
      style: string;
    };
    size: number;
    sampleText: string;
    sampleType: string;
  };
}
