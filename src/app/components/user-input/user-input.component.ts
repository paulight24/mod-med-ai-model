import { UtilityService } from './../../services/utility.service';
import { RestService } from './../../services/rest.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sentiment } from 'src/app/models/sentiments';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class AddUserInputComponent {
  constructor(
    private restService: RestService,
    private utility: UtilityService,
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddUserInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sentiments: Sentiment[] }
  ) { }
  
  /** Create form using out of the box angular FormBuilder
   * Set the VALIDATOR TO REQUIRED - for catching errors
   */
  form: FormGroup = this.fb.group({
    command: ['', Validators.required]
  });

  get command() {
    return this.form.get('command');
  }

  /** This method is called when user hits submit */
  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid || !this.form.controls['command']?.value) {
      this.utility.openSnackBar('No input was added');
      this._dialogRef.close();
      return;
    }

    // Randomize object
    let sentiment: Sentiment = this.data.sentiments[Math.floor(1 + Math.random() * this.data.sentiments.length)];
    let param = { sentiment: sentiment.sentiment, explanation: sentiment.explanation, ...this.form.value };

    /** Post into database */
    this.restService.addSentiment(param).subscribe({
      next: (val: Sentiment) => {
        this.utility.openSnackBar('Sentiment successfully added');
        this._dialogRef.close(val);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err); // Catch error
      },
    });
  }
}
