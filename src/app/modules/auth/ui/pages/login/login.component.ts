import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onPrompt() {
    this.router.navigateByUrl('/register');
  }
}
