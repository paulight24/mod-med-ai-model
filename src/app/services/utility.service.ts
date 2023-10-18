import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private matSnackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'ok') {
    this.matSnackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
