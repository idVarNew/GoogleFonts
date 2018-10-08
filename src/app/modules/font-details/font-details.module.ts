import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { SharedModule } from '../../shared/shared.module';


import {
    FontdetailsComponent,
    IntroComponent,
    LanguagesComponent,
    PreviewComponent,
    SizeComponent,
    StylesComponent,
    WeightsComponent,

} from '.'

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
       FormsModule,
        AppRoutingModule,
        ContenteditableModule,
        SharedModule,
      //  FontdetailsRoutingModule
    ],
    declarations: [
        FontdetailsComponent,
        IntroComponent,
        LanguagesComponent,
        PreviewComponent,
        SizeComponent,
        StylesComponent,
        WeightsComponent,
    ],
    exports: [
        FontdetailsComponent
    ]
})
export class FontdetailsModule { }