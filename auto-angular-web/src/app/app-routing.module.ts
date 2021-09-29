import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./common/components/not-found/not-found.component";
import {FaqComponent} from "./common/components/faq/faq.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dasboard.module').then(m => m.DashbordModule)
  },
  {
    path: 'scheckheft',
    loadChildren: () => import('./scheckheft/scheckheft.module').then(m => m.ScheckheftModule)
  },
  {
    path: 'faq',
    component: FaqComponent
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
export class AppRoutingModule {
}
