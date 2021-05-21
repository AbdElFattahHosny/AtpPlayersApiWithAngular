import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from "./player";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private apiURL = "https://localhost:44348/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.apiURL + '/Players')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getPlayer(id): Observable<Player> {
    return this.httpClient.get<Player>(this.apiURL + '/Players/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPlayer(player): Observable<Player> {
    return this.httpClient.post<Player>(this.apiURL + '/Players/', JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updatePlayer(id, player): Observable<Player> {
    return this.httpClient.put<Player>(this.apiURL + '/Players/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deletePlayer(id) {
    alert("you are going to delete this player : ");
    return this.httpClient.delete<Player>(this.apiURL + '/Players/' + id, this.httpOptions).pipe(catchError(this.errorHandler));   
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
