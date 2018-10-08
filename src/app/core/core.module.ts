import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AsideModule } from './aside/aside.module';
import { HeaderModule } from './header/header.module';
import { AsideComponent, HeaderComponent } from '.';


@NgModule({
  imports: [NgbModule, AsideModule, HeaderModule],
  declarations: [],
  exports: [AsideComponent, HeaderComponent]
})
export class CoreModule {}
