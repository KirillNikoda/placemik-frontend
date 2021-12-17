import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthInputComponent } from '@modules/auth/ui/components/input/auth-input.component';
import { AuthLayoutComponent } from '@modules/auth/ui/components/layout/auth-layout.component';
import { AuthPromptComponent } from '@modules/auth/ui/components/prompt/prompt.component';
import { LoginPageComponent } from '@modules/auth/ui/pages/login/login.component';
import { RegisterPageComponent } from '@modules/auth/ui/pages/register/register.component';

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
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    AuthPromptComponent,
    AuthLayoutComponent,
    AuthInputComponent,
  ],
})
export class AuthenticationModule {}
