import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { NgxMasonryModule } from 'ngx-masonry';
import { FontCardModule } from '../font-card/font-card.module';
import { SharedModule } from '../../shared/shared.module';
import {FontsComponent, FiltersBarComponent} from '.';
import {FontsRoutingModule} from './fonts-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        FontCardModule,
        FontsRoutingModule,
        ContenteditableModule,
        NgxMasonryModule,
      
        SharedModule,
    ],
    declarations: [
        FontsComponent,
        FiltersBarComponent      
    ],
    exports: [
        FontsComponent
    ]
})

export class FontsModule { }