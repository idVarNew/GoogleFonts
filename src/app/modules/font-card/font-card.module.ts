import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsRoutingModule } from '../fonts/fonts-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { SharedModule } from '../../shared/shared.module';

import {
    FontPreviewComponent,
    SampleTextComponent,
    SizeOptionsComponent,
    VariantsComponent,
    FontCardComponent

} from '.';


@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      SharedModule,
      FormsModule,
      ContenteditableModule,
      FontsRoutingModule  
       
    ],
    declarations: [
        FontPreviewComponent,
        SampleTextComponent,
        SizeOptionsComponent,
        VariantsComponent,
        FontCardComponent,

    ],
    exports: [
        FontCardComponent
    ]
})
export class FontCardModule { }