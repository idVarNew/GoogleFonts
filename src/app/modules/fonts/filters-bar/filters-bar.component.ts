import { Component, OnInit, Input } from '@angular/core';
import { UI } from '../../../shared/models/font.model';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss']
})
export class FiltersBarComponent implements OnInit {
  @Input()
  uiState: UI;
  @Input()
  sortingType;

  constructor() {}

  ngOnInit() {}
}
