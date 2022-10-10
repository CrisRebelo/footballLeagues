import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPageComponent } from './components/team-page/team-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: ':id',  component: TeamPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
