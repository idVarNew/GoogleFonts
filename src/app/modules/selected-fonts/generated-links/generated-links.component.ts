import { Component, Input } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-generated-links',
  templateUrl: './generated-links.component.html',
  styleUrls: ['./generated-links.component.scss']
})
export class GeneratedLinksComponent {
  @Input()
  cssLink: string;
  @Input()
  cssImportCode: string;
  @Input()
  selectedFonts: Array<SingleFont>;
}
