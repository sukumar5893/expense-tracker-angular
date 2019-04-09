import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SignupComponent } from '../signup/signup.component';



@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '600px',
      height: '350px'
    });
  }
  openSignupDialog() {
    let dialogRef = this.dialog.open(SignupComponent, {
      width: '600px'
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`closed`); // Pizza!
    // });

    // dialogRef.close('Pizza!');

  }

}
