import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestResponse } from 'src/app/core/data-models/request-response.models';
import { BaseLeague } from '../models/leagues.models';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/core/services/error-handling.service';

@Injectable({
    providedIn: 'root'
})
export class LeaguesService {

    constructor(
      private http: HttpClient,
      private errorHandler: ErrorHandlingService
      ) { }

    getLeagues(): Observable<RequestResponse<BaseLeague>> {
        const params = { include: 'country,season'}
        const url = 'https://soccer.sportmonks.com/api/v2.0/leagues?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC'
        return this.http
          .get<RequestResponse<BaseLeague>>(url, {params})
          .pipe(retry(1), catchError(this.errorHandler.handleError));
    }
}