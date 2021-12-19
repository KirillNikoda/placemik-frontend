import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from '@modules/auth/ui/pages/register/register.component';
import {AuthCommonUiModule} from "@modules/auth/ui/components/auth-common-ui.module";

@NgModule({
  imports: [
    AuthCommonUiModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterPageComponent },
    ]),
  ],
  declarations: [RegisterPageComponent],
})
export class RegisterModule {}
