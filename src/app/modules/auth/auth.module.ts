import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from '@modules/auth/ui/pages/register/register.module';
import { LoginModule } from '@modules/auth/ui/pages/login/login.module';

@NgModule({
  imports: [CommonModule, FormsModule, RegisterModule, LoginModule],
})
export class AuthenticationModule {}
