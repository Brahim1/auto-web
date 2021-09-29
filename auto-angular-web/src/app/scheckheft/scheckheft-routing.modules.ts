import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "../common/models/app-router-link.enum";
import {ScheckheftSucheComponent} from "./scheckheft-suche/scheckheft-suche.component";
import {ScheckheftBuchComponent} from "./scheckheft-buch/scheckheft-buch.component";
import {ScheckheftListComponent} from "./scheckheft-list/scheckheft-list.component";

export const scheckheftRoutes: Routes = [
  {
    path: '',
    component: ScheckheftSucheComponent,
  },
  {
    path: 'suche',
    component: ScheckheftSucheComponent,
  },
  {
    path: 'liste',
    component: ScheckheftListComponent
  },
  {
    path: ':id',
    component: ScheckheftBuchComponent,
  }

]

@NgModule({
  imports: [RouterModule.forChild(scheckheftRoutes)],
  exports: [RouterModule]
})
export class ScheckheftRoutingModules {

}
