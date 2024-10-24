import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'nevy11-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      userpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login_user() {
    if (this.loginForm.valid) {
      console.log(`user: ${this.loginForm.value['username']}`);
      let body: Login = {
        username: this.loginForm.value['username'],
        userpassword: this.loginForm.value['userpassword'],
      };
      this.loginService.login_user(body).subscribe((resp) => {
        console.log(resp.message);
        if (resp.message === 'true') {
          this.router.navigate(['Official Website']);
        } else {
          console.assert('incorrect username or passsword');
        }
      });
    } else {
      console.error('Fill in the missing fields');
    }
  }
}
