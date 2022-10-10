import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { RequestResponse } from 'src/app/core/data-models/request-response.models';
import { ErrorHandlingService } from 'src/app/core/services/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService
  ) { }

  getTeamById(teamId: number) {
    const params = { include: 'squad.player'}
    const url = `https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC`
    return this.http
      .get<RequestResponse<any>>(url, {params})
      .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
}