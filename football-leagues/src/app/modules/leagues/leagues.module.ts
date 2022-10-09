import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { StandingsPageComponent } from './components/standings-page/standings-page.component';
import { StandingsListComponent } from './components/standings-list/standings-list.component';
import { StandingsBannerComponent } from './components/standings-banner/standings-banner.component';
import { LeaguesListComponent } from './components/leagues-list/leagues-list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    StandingsPageComponent,
    StandingsListComponent,
    StandingsBannerComponent,
    LeaguesListComponent
  ],
  imports: [
    CommonModule,
    LeaguesRoutingModule,
    CoreModule
  ]
})
export class LeaguesModule { }
