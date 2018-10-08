import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import {  
    SelectedPreviewComponent, 
    CategoryComponent, 
    LanguagesComponent, 
    SampleTextComponent, 
    SortingComponent,
    SearchComponent,
    FontStylesComponent,
    FiltersComponent
 
} from '.';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
       FormsModule,
        AppRoutingModule 
    ],
    declarations: [
        SelectedPreviewComponent, 
        CategoryComponent, 
        LanguagesComponent, 
        SampleTextComponent, 
        SortingComponent,
        SearchComponent,
        FontStylesComponent,
        FiltersComponent

    ],
    exports: [
        FiltersComponent,
    ]
})
export class FiltersModule { }