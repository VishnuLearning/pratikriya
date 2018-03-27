import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'alertdialog',
    templateUrl: 'alertdialog.html'
  })
  export class AlertDialog {
  
    constructor(
      public dialogRef: MatDialogRef<AlertDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  }