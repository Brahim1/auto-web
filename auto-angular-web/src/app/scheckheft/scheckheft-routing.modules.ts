import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "../common/models/app-router-link.enum";
import {ScheckheftComponent} from "./scheckheft.component";
import {ScheckheftBuchComponent} from "./scheckheft-buch/scheckheft-buch.component";

export const scheckheftRoutes: Routes = [
  {
    path: '',
    component: ScheckheftComponent,
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
