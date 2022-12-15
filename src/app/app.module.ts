import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { RootRoutes } from './routes/root-routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    RouterModule.forRoot(RootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
