import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutes} from "../common/models/app-router-link.enum";

export const dasboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {routeReuseKey: AppRoutes.DASHBOARD}
  }
]

@NgModule({
  imports: [RouterModule.forChild(dasboardRoutes)],
  exports: [RouterModule]
})
export class DashboadRoutingModules {

}
