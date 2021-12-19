import {Routes} from "@angular/router";
import {RegisterPageComponent} from "@modules/auth/ui/pages/register/register.component";
import {LoginPageComponent} from "@modules/auth/ui/pages/login/login.component";

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
