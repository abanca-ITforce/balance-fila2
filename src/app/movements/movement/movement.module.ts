import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementComponent } from './movement.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MovementComponent],
  imports: [
    CommonModule,
    MovementRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MovementModule { }
