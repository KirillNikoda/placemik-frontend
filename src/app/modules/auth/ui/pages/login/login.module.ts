import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthCommonUiModule } from '@modules/auth/ui/components/auth-common-ui.module';
import { LoginPageComponent } from '@modules/auth/ui/pages/login/login.component';
import { AuthRoute, authRoutes } from '@modules/auth/routes';

@NgModule({
  imports: [
    AuthCommonUiModule,
    RouterModule.forChild(authRoutes[AuthRoute.Login]),
  ],
  declarations: [LoginPageComponent],
})
export class LoginModule {}
