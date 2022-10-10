import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    CoreModule
  ]
})
export class TeamsModule { }