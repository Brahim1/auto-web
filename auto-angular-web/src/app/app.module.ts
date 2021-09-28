import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './common/components/alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheckheftComponent } from './scheckheft/scheckheft.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    ScheckheftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
