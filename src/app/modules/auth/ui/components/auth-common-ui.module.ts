import { NgModule } from '@angular/core';
import { AuthInputComponent } from '@modules/auth/ui/components/input/auth-input.component';
import { AuthLayoutComponent } from '@modules/auth/ui/components/layout/auth-layout.component';
import { AuthPromptComponent } from '@modules/auth/ui/components/prompt/prompt.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthInputComponent, AuthLayoutComponent, AuthPromptComponent],
  exports: [AuthInputComponent, AuthLayoutComponent, AuthPromptComponent],
})
export class AuthCommonUiModule {}
