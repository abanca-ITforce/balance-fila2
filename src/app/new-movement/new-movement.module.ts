import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMovementRoutingModule } from './new-movement-routing.module';
import { NewMovementComponent } from './new-movement.component';


@NgModule({
  declarations: [NewMovementComponent],
  imports: [
    CommonModule,
    NewMovementRoutingModule
  ]
})
export class NewMovementModule { }
