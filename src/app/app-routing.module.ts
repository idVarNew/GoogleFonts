import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'selected-fonts',
    loadChildren: "./modules/selected-fonts/selected-fonts.module#SelectedFontsModule"
  },
  {
    path: 'fonts/:familyName',
    loadChildren: "./modules/font-details/font-details.module#FontdetailsModule"
  },
  {
    path: '',
    loadChildren: "./modules/fonts/fonts.module#FontsModule"
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
