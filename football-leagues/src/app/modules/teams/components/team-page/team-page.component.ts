import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  isLoading = false;
  teamId = 0;
  team$!: Observable<any>;

  constructor(
      private teamsService: TeamsService,
      private route: ActivatedRoute
      ) {
      this.teamId = +this.route.snapshot.params['id'];
  }

  getTeams(teamId: number) {
      this.isLoading = true;
      this.team$ = this.teamsService.getTeamById(teamId).pipe(
      switchMap((team) => {
          return of(team).pipe(
          map((team) => {
              return team.data;
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
    this.getTeams(this.teamId);
  }

}
