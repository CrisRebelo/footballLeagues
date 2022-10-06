import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { StandingsPageComponent } from './components/standings-page/standings-page.component';
import { StandingsListComponent } from './components/standings-list/standings-list.component';
import { StandingsBannerComponent } from './components/standings-banner/standings-banner.component';


@NgModule({
  declarations: [
    StandingsPageComponent,
    StandingsListComponent,
    StandingsBannerComponent
  ],
  imports: [
    CommonModule,
    LeaguesRoutingModule
  ]
})
export class LeaguesModule { }
