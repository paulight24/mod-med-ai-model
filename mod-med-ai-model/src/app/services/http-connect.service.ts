import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sentiment } from '../models/sentiments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectService {
  server: string = 'http://localhost:3000/sentiments';
  constructor(private http: HttpClient) { }

  fetchSentiments(): Observable<Sentiment[]> {
    return this.http.get(this.server) as Observable<Sentiment[]>;
  }

  addSentiment(data: Partial<Sentiment>): Observable<Sentiment> {
    return this.http.post(this.server, data) as Observable<Sentiment>;
  }
}
