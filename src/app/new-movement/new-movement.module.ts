import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMovementRoutingModule } from './new-movement-routing.module';
import { NewMovementComponent } from './new-movement.component';
import { FormMovementComponent } from './form-movement/form-movement.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NewMovementComponent, FormMovementComponent],
  imports: [
    CommonModule,
    NewMovementRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class NewMovementModule { }
