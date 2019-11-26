import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovementsService } from 'src/app/movements.service';
import { MovementValidatorService } from '../movement-validator.service';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {
  movementForm: FormGroup;
  private movement = this.movementsList.getNew();

  minAmount: number = 0.01;

  constructor(
    fb: FormBuilder,
    private movementsList: MovementsService,
    private movementValidatorService: MovementValidatorService
  ) {
    this.movementForm = fb.group({
      concept: [this.movement.concept, [Validators.required, Validators.minLength(6)]],
      amount: [this.movement.amount, [Validators.required, Validators.min(this.minAmount)]],
      dueDate: [this.movement.dueDate, [ Validators.required, movementValidatorService.dateFormat]],
      type: [this.movement.type, Validators.required]
    });
  }

  onSubmit() {
    this.movementsList.submitMovement(this.movementForm.value);
  }

  hasErrors(controlName: string) {
    return this.movementValidatorService.hasErrors(controlName, this.movementForm);
  }

  hasError(controlName: string, errorName: string) {
    return this.movementValidatorService.hasError(
      controlName,
      errorName,
      this.movementForm
    );
  }

  isTouched(controlName: string) {
    return this.movementValidatorService.isTouched(controlName, this.movementForm);
  }
}
