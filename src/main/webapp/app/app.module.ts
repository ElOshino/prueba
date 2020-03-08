import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PruebaSharedModule } from 'app/shared/shared.module';
import { PruebaCoreModule } from 'app/core/core.module';
import { PruebaAppRoutingModule } from './app-routing.module';
import { PruebaHomeModule } from './home/home.module';
import { PruebaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PruebaSharedModule,
    PruebaCoreModule,
    PruebaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PruebaEntityModule,
    PruebaAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class PruebaAppModule {}
