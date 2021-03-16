import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { MustMatch} from '../must-validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm:any;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }


    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      else
      {
         this.userService.registerUser(this.registerForm.value).subscribe(
           response => {
             console.log(response);
           },
           error => {
             console.log(error);
           }
         )
      }
  }
}

