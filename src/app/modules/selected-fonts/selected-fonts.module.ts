import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../../shared/shared.module';

import {
    SelectedSubsetsComponent,
    SelectedVariantsComponent,
    CustomizeSettingsComponent,
    GeneratedLinksComponent,
    SelectedFontsComponent

} from '.';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        AppRoutingModule,
        ContenteditableModule,
        NgxMasonryModule,
        SharedModule
    ],
    declarations: [
        SelectedSubsetsComponent,
        SelectedVariantsComponent,
        CustomizeSettingsComponent,
        GeneratedLinksComponent,
        SelectedFontsComponent
    ],
    exports: [
        SelectedFontsComponent
    ]
})
export class SelectedFontsModule { }