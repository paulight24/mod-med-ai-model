import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sentiment } from 'src/app/models/sentiments';

@Component({
  selector: 'app-sentiment-details',
  templateUrl: './sentiment-details.component.html',
  styleUrls: ['./sentiment-details.component.css']
})
export class SentimentDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {row: Partial<Sentiment>}
  ) { }

}
