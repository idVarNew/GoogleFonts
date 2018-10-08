import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SelectionButtonComponent} from './components/selection-button/selection-button.component';
import { RemoveFontButtonComponent } from './components/remove-font-button/remove-font-button.component';



@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        SelectionButtonComponent,
        RemoveFontButtonComponent
       
    ],
    exports: [
        SelectionButtonComponent,
        RemoveFontButtonComponent    ]
})
export class SharedModule { }