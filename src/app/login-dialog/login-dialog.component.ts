import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(public DialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.DialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.DialogRef.close('Cancel');
  }

}
