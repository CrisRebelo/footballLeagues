import { Component, OnInit } from '@angular/core';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { RequestResponse } from 'src/app/core/data-models/request-response.models';
import { BaseLeague } from '../../models/leagues.models';
import { LeaguesService } from '../../services/leagues.service';

@Component({
    selector: 'app-leagues-list',
    templateUrl: './leagues-list.component.html',
    styleUrls: ['./leagues-list.component.scss']
})
export class LeaguesListComponent implements OnInit {
    isLoading = false;
    leagues$!: Observable<BaseLeague[]>;

    constructor( private leaguesService: LeaguesService) { }

    getLeagues() {
        this.isLoading = true;
        this.leagues$ = this.leaguesService.getLeagues().pipe(
        switchMap((leagues) => {
            return of(leagues).pipe(
            map((leagues) => {
                return leagues.data;
            }),
            catchError((error) => {
                return of(error);
            }),
            finalize(() => {
                this.isLoading = false;
            })
            )
        }),
        );
    }

    ngOnInit(): void {
        this.getLeagues();
    }

}
