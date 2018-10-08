import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  defaultText = ` Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
  farm-to-table  craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
  ullamco  ad vinyl  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
  helvetica VHS  salvia  yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
  sustainable jean  shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr
  butcher vero  sint qui sapiente accusamus tattooed echo park`;
  currentPreviewText = this.defaultText;
  polishLetters: boolean;

  @Input()
  font: SingleFont;
  @Input()
  fontWeight: string;
  @Input()
  fontStyle: string;
  @Input()
  fontSize: number;

  constructor() {}

  ngOnInit() {
    this.polishLetters = this.font.subsets.some(
      (subset: string): boolean => {
        return subset === 'latin-ext';
      }
    );
  }

  showPreviewText(value: string) {
    if (value !== '') {
      this.currentPreviewText = value;
    } else {
      this.currentPreviewText = this.defaultText;
    }
  }
}
