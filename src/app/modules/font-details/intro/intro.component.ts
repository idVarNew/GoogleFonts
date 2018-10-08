import { Component, OnInit, Input } from '@angular/core';
import { SingleFont } from '../../../shared/models/font.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input()
  font: SingleFont;

  constructor() {}

  ngOnInit() {}
}
