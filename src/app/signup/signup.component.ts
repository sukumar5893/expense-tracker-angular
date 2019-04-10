import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';

//custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];

//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       // return if another validator has already found an error on the matchingControl
//       return;
//     }

//     // set error on matchingControl if validation fails
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ mustMatch: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   }
// }

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
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    public DialogRef: MatDialogRef<SignupComponent>,
    private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', Validators.required]
    },
      {
        validator: [customEmail('email')]  //, MustMatch('password', 'confirmPassword')
      }
    );
  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;


      // stop here if form is invalid
      if (this.registerForm.invalid) return;

      await this.userService.addUser(this.registerForm.value)
      alert('SUCCESS!! :-)');

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
