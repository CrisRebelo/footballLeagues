import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, finalize, map, Observable, of, Subscription, switchMap } from 'rxjs';
import { compare, SortEvent } from 'src/app/core/data-models/sortable.models';
import { SortableDirective } from 'src/app/core/directive/sortable.directive';
import { FormatDateService } from 'src/app/core/helpers/formatDate.service';
import { ObjectFlattenerService } from 'src/app/core/helpers/object-flattener.service';
import { SortListService } from 'src/app/core/helpers/sort-list.service';
import { FlatStandings, Standing } from '../../models/standings.models';
import { StandingsService } from '../../services/standings.service';

@Component({
    selector: 'app-standings-list',
    templateUrl: './standings-list.component.html',
    styleUrls: ['./standings-list.component.scss']
})
export class StandingsListComponent implements OnInit {
    isLoading = false;
    standing$!: Observable<FlatStandings[]>;
    seasonId: number;

    standings!: FlatStandings[];
    originalStandings!: FlatStandings[];

    @ViewChildren(SortableDirective) headers!: QueryList<SortableDirective>;

    constructor(
        private standingsService: StandingsService,
        private route: ActivatedRoute,
        private objFlattenerService: ObjectFlattenerService,
        private formatDateService: FormatDateService,
        private sortListService: SortListService
    ) {
        this.seasonId = +this.route.snapshot.params['id'];
    }

    getStandings(seasonId: number) {
        const date = this.formatDateService.formatDate(new Date());
        this.isLoading = true;
        this.standing$ = this.standingsService.getLeagueStandingsBySeason(seasonId, date).pipe(
        switchMap((standings) => {
            return of(standings).pipe(
            map((standings) => {
                this.standings = this.flattenStandingsObject(standings.data);
                this.originalStandings = [...this.standings];
                return this.standings;
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

    flattenStandingsObject(obj: any) {
        let aux:any = [];
        obj.forEach((standing: any) => {
            const flattenedStanding = this.objFlattenerService.flattenObject(standing);
            aux = [...aux, flattenedStanding];
        });
        return aux;
    }

    onSort({column, direction}: SortEvent<FlatStandings>) {
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });
      this.standings = this.sortListService.sortList({column, direction}, this.originalStandings);

    }

    ngOnInit(): void {
        this.getStandings(this.seasonId);
    }

}
