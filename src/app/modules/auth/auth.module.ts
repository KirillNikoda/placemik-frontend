import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/modules/auth/ui/pages/login/login.component';
import { RegisterPageComponent } from 'src/app/modules/auth/ui/pages/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterPageComponent, LoginPageComponent],
})
export class AuthenticationModule {}
