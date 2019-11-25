import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ab-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {
  movementForm: FormGroup;
  private movement= {
    concept: '',
    amount: 1,
    dueDate: '',
    type: 'income'
  }

  constructor( fb: FormBuilder) {
    this.movementForm = fb.group({
      concept: [this.movement.concept, [Validators.required, Validators.minLength(6)]],
      amount: [this.movement.amount, [Validators.required, Validators.min(1)]],
      dueDate: [this.movement.dueDate, Validators.required],
      type: [this.movement.type, Validators.required]
    });
  }

  onSubmit() {}

  hasErrors(controlName: string){
    return this.movementForm.controls[controlName].invalid;
  }

  hasError(controlName: string, errorName: string){
    const control = this.movementForm.controls[controlName];
    return control.hasError(errorName);
  }

  isTouched(controlName: string){
    return this.movementForm.controls[controlName].touched;
  }


}
