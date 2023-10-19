import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sentiment } from '../models/sentiments';
import { Observable, map, of } from 'rxjs';
import { Sentiments } from 'src/assets/database_sentiments';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectService {
  sentiments: Observable<Sentiment[]> = of(Sentiments); // backup database
  server: string = 'http://localhost:3000/sentiments';
  constructor(private http: HttpClient) { }

  fetchSentiments2(): Observable<Sentiment[]> {
    let sentmts = this.http.get(this.server) as Observable<Sentiment[]>;
    return sentmts;
  }
  fetchSentiments(): Observable<Sentiment[]> {
    let sentmts = this.http.get(this.server) as Observable<Sentiment[]>;
    return this.sentiments;
  }
  addSentiment2(data: Partial<Sentiment>): Observable<Sentiment> {
    return this.http.post(this.server, data) as Observable<Sentiment>;
  }

  addSentiment(data: Sentiment): Observable<Sentiment> {
    // let sentmts = this.http.post(this.server, data) as Observable<Sentiment>;
    let id = {id : this.getRandomID(9)};
     this.sentiments.pipe(map(res => {
      let r = {...res, ...id };
      console.log(r);
      res = r;
      // res.push(data.id ? data : {...data, ...id})
      return res;
     }));
     return of(data);
  }

  getRandomID(max: number) {
    return Math.floor(Math.random() * max);
  }
}
