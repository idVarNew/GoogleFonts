import { Component, OnInit, Input } from '@angular/core';
import { Filtered } from '../../../shared/models/font.model';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss']
})
export class FiltersBarComponent implements OnInit {
  @Input()
  perPage: number;
  @Input()
  filters: Filtered;
  @Input()
  sortingType: string;

  constructor() {}

  ngOnInit() {}
  
}
