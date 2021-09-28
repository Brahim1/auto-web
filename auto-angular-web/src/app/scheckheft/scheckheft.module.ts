import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheckheftRoutingModules} from "./scheckheft-routing.modules";
import { ScheckheftBuchComponent } from './scheckheft-buch/scheckheft-buch.component';


@NgModule({
  declarations: [
    ScheckheftBuchComponent
  ],
  imports: [
    CommonModule,
    ScheckheftRoutingModules
  ]
})
export class ScheckheftModule {
}
