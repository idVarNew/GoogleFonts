import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { UIState } from './store/reducers/uiState.reducer';
import { DataState } from './store/reducers/dataState.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/app.effects';
import { AppComponent } from './app.component';
import { FontdetailsModule } from './modules/font-details/font-details.module';
import { FontsModule } from './modules/fonts/fonts.module';
import { SelectedFontsModule } from './modules/selected-fonts/selected-fonts.module';
import { CoreModule } from './core/core.module';
import { FilterFonts } from './store/reducers/filterFonts.reducer';
import { CacheFonts } from './store/reducers/cachedFonts.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([Effects]),
    StoreModule.forRoot({
      dataState: DataState,
      uiState: UIState,
      filterFonts: FilterFonts,
      cacheFonts: CacheFonts
    }),
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
