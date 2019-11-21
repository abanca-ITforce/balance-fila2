import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsComponent } from './movements.component';

const routes: Routes = [{ path: '', component: MovementsComponent }, { path: ':id', loadChildren: () => import('./movement/movement.module').then(m => m.MovementModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementsRoutingModule { }
