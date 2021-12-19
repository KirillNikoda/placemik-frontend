import { RegisterPageComponent } from '@modules/auth/ui/pages/register/register.component';
import { LoginPageComponent } from '@modules/auth/ui/pages/login/login.component';

export enum AuthRoute {
  Register = 'register',
  Login = 'login',
}

export const authRoutes = {
  [AuthRoute.Register]: [
    {
      path: 'register',
      component: RegisterPageComponent,
    },
  ],
  [AuthRoute.Login]: [
    {
      path: 'login',
      component: LoginPageComponent,
    },
  ],
};
