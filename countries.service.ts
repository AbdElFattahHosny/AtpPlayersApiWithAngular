import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Countries } from "./countries";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL = "https://localhost:44348/api";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(this.apiURL + '/Positions')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

