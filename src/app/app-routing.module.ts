import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontdetailsComponent } from './modules/font-details/font-details.component';
import { FontsComponent } from './modules/fonts/fonts.component';
import { SelectedFontsComponent } from './modules/selected-fonts/selected-fonts.component';

const routes: Routes = [
  {
    path: 'selected-fonts',
    component: SelectedFontsComponent
  },
  {
    path: 'fonts/:familyName',
    component: FontdetailsComponent
  },
  {
    path: '',
    component: FontsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
