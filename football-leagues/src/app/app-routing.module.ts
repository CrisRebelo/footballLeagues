import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'leagues', pathMatch: 'full' },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'leagues',
                loadChildren: () => import('./modules/leagues/leagues.module').then(m => m.LeaguesModule)
            },
            {
                path: 'teams',
                loadChildren: () => import('./modules/teams/teams-routing.module').then(m => m.TeamsRoutingModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }