import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FiltersModule } from '../../modules/filters/filters.module';

import {
    AsideComponent
} from '.';


@NgModule({
    imports: [
        NgbModule,
        FiltersModule
    ],
    declarations: [
        AsideComponent,
    ],
    exports: [
       AsideComponent,
    ]
})
export class AsideModule { }