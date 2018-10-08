import { Component, OnInit, Input } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  
  @Input()
  font: SingleFont;

  constructor() {}

  ngOnInit() {}
}
