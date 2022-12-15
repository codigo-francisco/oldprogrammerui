import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './routes/pages-routes';
import { BaseAuthenticationComponent } from './authentication/base-authentication/base-authentication.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    BaseAuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
