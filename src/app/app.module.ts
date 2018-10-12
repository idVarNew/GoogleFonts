import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/app.effects';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import {reducers } from './store/reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([Effects]),
    StoreModule.forRoot(reducers),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
