import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

export function customEmail(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];


    if (control.errors && control.errors.customEmail) {
      // return if another validator has already found an error on the email
      return;
    }
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // set error on email if validation fails
    if (!(control.value.match(pattern))) {
      control.setErrors({ customEmail: true });
    } else {
      control.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public DialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      designation: ['', Validators.required, Validators.minLength(5)],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
    },
      {
        validator: [customEmail('email')] //MustMatch('password', 'confirmPassword'),
      }
    );
  }
  onCloseConfirm() {
    this.DialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.DialogRef.close('Cancel');
  }

}
