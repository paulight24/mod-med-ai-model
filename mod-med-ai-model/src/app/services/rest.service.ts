import { HttpConnectService } from './http-connect.service';
import { Injectable } from '@angular/core';
import { Sentiment } from '../models/sentiments';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private $dataStore = new BehaviorSubject<Sentiment[]>([]);
  public $sentimentsStore = this.$dataStore.asObservable();

  constructor(private _httpConnectService: HttpConnectService) { }

  getSentimentList(): Observable<Sentiment[]> {
    return this._httpConnectService.fetchSentiments()
      .pipe(
        catchError((error) => {
          throw new Error('An error occored: ', error);
        }),
        tap((response: Sentiment[]) => this.$dataStore.next(response))
      );
  }

  addSentiment(param: Partial<Sentiment>): Observable<Sentiment> {
    return this._httpConnectService.addSentiment(param)
      .pipe(
        catchError((error) => {
          throw new Error('An error occured: ', error);
        }),
        tap((response: Sentiment) => {
        })
      );
  }

}
