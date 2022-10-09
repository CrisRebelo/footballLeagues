import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError } from 'rxjs';
import { RequestResponse } from 'src/app/core/data-models/request-response.models';
import { ErrorHandlingService } from 'src/app/core/services/error-handling.service';
import { BaseLeague } from '../models/leagues.models';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService
  ) { }

  getLeagueStandingsBySeason(seasonId: number, date: string): Observable<any> {
      const url = `https://soccer.sportmonks.com/api/v2.0/standings/season/${seasonId}/date/${date}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC`;
      return this.http
        .get<RequestResponse<BaseLeague>>(url)
        .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
}
