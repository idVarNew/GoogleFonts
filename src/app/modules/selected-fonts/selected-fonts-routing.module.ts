import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedFontsComponent } from './selected-fonts.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedFontsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedFontsRoutingModule {}
