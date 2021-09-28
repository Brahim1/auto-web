import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./dashboard/dasboard.module').then(m => m.DashbordModule)
  },
  {
    path:'scheckheft',
    loadChildren: () => import('./scheckheft/scheckheft.module').then(m => m.ScheckheftModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
