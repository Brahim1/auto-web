import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheckheftRoutingModules} from "./scheckheft-routing.modules";
import { ScheckheftBuchComponent } from './scheckheft-buch/scheckheft-buch.component';
import { ScheckheftListComponent } from './scheckheft-list/scheckheft-list.component';


@NgModule({
  declarations: [
    ScheckheftBuchComponent,
    ScheckheftListComponent
  ],
  imports: [
    CommonModule,
    ScheckheftRoutingModules
  ]
})
export class ScheckheftModule {
}
