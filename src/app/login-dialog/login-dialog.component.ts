import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    public DialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async login() {

    const isValid: Boolean = await this.authService.login(this.username, this.password);
    try {
      if (isValid) {
        this.router.navigate(["home"]);
        this.DialogRef.close('Login');
      }
    }
    catch (err) {
      console.log(err)
      alert(err)
    }
  }

  onCloseCancel() {
    this.DialogRef.close('Cancel');
  }

}
