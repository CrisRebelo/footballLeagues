import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { LeaguesListComponent } from './components/leagues-list/leagues-list.component'
import { StandingsPageComponent } from './components/standings-page/standings-page.component'


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',  component: LeaguesListComponent },
  { path: 'standings/:id',  component: StandingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
