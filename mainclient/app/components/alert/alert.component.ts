import { Component, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../services/alert.service';
import { MatDialog } from '@angular/material';
import { AlertDialog } from './alertdialog';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService,
              public dialog: MatDialog) {
    // subscribe to alert messages
    this.subscription = alertService.getMessage().subscribe(message => { this.message = message; if(message && message.text) this.openDialog(); });
  }

  openDialog(): void {
    //console.log("opening dialog");
    let dialogRef = this.dialog.open(AlertDialog, {
      width: '250px',
      data: this.message
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }

}