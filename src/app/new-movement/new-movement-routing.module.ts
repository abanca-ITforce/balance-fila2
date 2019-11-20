import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMovementComponent } from './new-movement.component';

const routes: Routes = [{ path: '', component: NewMovementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMovementRoutingModule { }
