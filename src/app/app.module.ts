import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@modules/auth/auth.module';
import { GraphQLModule } from '@modules/graphql/graphql.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    AuthenticationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
