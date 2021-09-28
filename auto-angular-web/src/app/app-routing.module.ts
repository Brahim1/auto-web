import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./common/not-found/not-found.component";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./dashboard/dasboard.module').then(m => m.DashbordModule)
  },
  {
    path:'scheckheft',
    loadChildren: () => import('./scheckheft/scheckheft.module').then(m => m.ScheckheftModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
