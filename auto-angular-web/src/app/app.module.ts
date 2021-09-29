import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './common/components/alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheckheftSucheComponent } from './scheckheft/scheckheft-suche/scheckheft-suche.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { FaqComponent } from './common/components/faq/faq.component';
import { WuerfelComponent } from './common/components/beispiel/wuerfel/wuerfel.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    ScheckheftSucheComponent,
    NotFoundComponent,
    FaqComponent,
    WuerfelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
