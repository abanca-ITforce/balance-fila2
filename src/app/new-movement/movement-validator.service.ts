import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class MovementValidatorService {
  constructor() {}

  hasErrors(controlName: string, form: FormGroup) {
    return form.controls[controlName].invalid;
  }

  hasError(controlName: string, errorName: string, form: FormGroup) {
    const control = form.controls[controlName];
    return control.hasError(errorName);
  }

  isTouched(controlName: string, form: FormGroup) {
    return form.controls[controlName].touched;
  }

  dateFormat(control: AbstractControl) {
    const value = control.value;
    if (typeof value == 'string') {
      if (value.length == 10 && value.charAt(2) == '/' && value.charAt(5) == '/') {
        return null;
      }
    }
    return { dateFormat: 'Format must be dd/mm/yyyy' };
  }
}
