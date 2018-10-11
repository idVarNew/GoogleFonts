import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { SharedModule } from '../../shared/shared.module';
import { FontDetailsRoutingModule } from './font-details-routing.module';

import {
  FontdetailsComponent,
  IntroComponent,
  LanguagesComponent,
  PreviewComponent,
  SizeComponent,
  StylesComponent,
  WeightsComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,   
    ContenteditableModule,
    SharedModule,
    FontDetailsRoutingModule, 
  ],
  declarations: [
    FontdetailsComponent,
    IntroComponent,
    LanguagesComponent,
    PreviewComponent,
    SizeComponent,
    StylesComponent,
    WeightsComponent
  ],
  exports: [FontdetailsComponent]
})
export class FontdetailsModule {}
