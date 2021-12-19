import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from '@modules/auth/ui/pages/register/register.component';
import { AuthCommonUiModule } from '@modules/auth/ui/components/auth-common-ui.module';
import { AuthRoute, authRoutes } from '@modules/auth/routes';

@NgModule({
  imports: [
    AuthCommonUiModule,
    RouterModule.forChild(authRoutes[AuthRoute.Register]),
  ],
  declarations: [RegisterPageComponent],
})
export class RegisterModule {}
