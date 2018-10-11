import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontsComponent } from './fonts.component';

const routes: Routes = [
  {
    path: '',
    component: FontsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontsRoutingModule {}
