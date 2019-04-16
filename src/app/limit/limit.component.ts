import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { Router } from '@angular/router'; 4
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.css']
})
export class LimitComponent implements OnInit {
  limit: number | null
  setLimit: FormGroup;
  submitted: boolean = false;
  constructor(
    public DialogRef: MatDialogRef<LimitComponent>,
    private userService: UserService,
    private route: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setLimit = this.formBuilder.group({
      min_bal: ['']

    }

    );
  }


  async onCloseCancel() {
    try {

      await this.userService.addLimit(0)
      this.DialogRef.close('Cancel');
      this.route.navigate(['home'])

    }
    catch (err) {
      console.log(err)
      alert(err)

    }

  }

  async onSubmit() {

    try {



      await this.userService.addLimit(this.setLimit.value)
      this.DialogRef.close('Save');
      this.route.navigate(['home'])

    }
    catch (err) {
      console.log(err)
      alert(err)

    }

  }

}
