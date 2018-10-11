import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontdetailsComponent } from './font-details.component';

const routes: Routes = [
  {
    path: '',
    component: FontdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontDetailsRoutingModule {}
