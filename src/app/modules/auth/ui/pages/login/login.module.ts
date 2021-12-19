import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthCommonUiModule } from '@modules/auth/ui/components/auth-common-ui.module';
import { LoginPageComponent } from '@modules/auth/ui/pages/login/login.component';

@NgModule({
  imports: [
    AuthCommonUiModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
    ]),
  ],
  declarations: [LoginPageComponent],
})
export class LoginModule {}
