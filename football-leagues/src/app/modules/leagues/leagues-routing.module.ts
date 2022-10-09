import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { LeaguesListComponent } from './components/leagues-list/leagues-list.component'
import { StandingsListComponent } from './components/standings-list/standings-list.component'


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',  component: LeaguesListComponent },
  { path: 'standings/:id',  component: StandingsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
