import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, finalize, map, Observable, of, Subscription, switchMap } from 'rxjs';
import { compare, SortEvent } from 'src/app/core/data-models/sortable.models';
import { SortableDirective } from 'src/app/core/directive/sortable.directive';
import { ObjectFlattenerService } from 'src/app/core/helpers/object-flattener.service';
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
    queryParams$!: Observable<Params>;
    routerEventsSub!: Subscription;
    routerEventParams$!: Observable<Params>;
    seasonId: number;

    standings!: FlatStandings[];
    vanillaStandings!: FlatStandings[];

    @ViewChildren(SortableDirective) headers!: QueryList<SortableDirective>;

    constructor(
        private standingsService: StandingsService,
        private route: ActivatedRoute,
        private objFlattenerService: ObjectFlattenerService
    ) {
        this.seasonId = +this.route.snapshot.params['id'];
    }

    getStandings(seasonId: number) {
        const date = this.formatDate(new Date());
        this.isLoading = true;
        this.standing$ = this.standingsService.getLeagueStandingsBySeason(seasonId, date).pipe(
        switchMap((standings) => {
            return of(standings).pipe(
            map((standings) => {
                this.standings = this.flattenStandingsObject(standings.data);
                this.vanillaStandings = [...this.standings];
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

      // resetting other headers
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });

      // sorting countries
      if (direction === '' || column === '') {
        this.standings = this.vanillaStandings;
      } else {
        this.standings = [...this.vanillaStandings].sort((a, b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        });
      }
    }

    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }

    formatDate(date: Date) {
        return [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
        ].join('-');
    }

    ngOnInit(): void {
        this.getStandings(this.seasonId);
    }

}
