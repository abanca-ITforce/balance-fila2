import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';
import { FormMovementComponent } from './new-movement/form-movement/form-movement.component';
import { MovementValidatorService } from './new-movement/movement-validator.service';

@Injectable({
  providedIn: 'root'
})

export class MovementsService {
  incomesArray = ['Sueldo', 'Cobro deudas', 'Venta organos'];
  expendituresArray = ['Cañas', 'Hipoteca', 'Luz y agua'];
  states = this.incomesArray;

  movementList: any[];

  constructor() {
    const temp = localStorage.getItem('movementList');
    if (temp) {
      this.movementList = JSON.parse(temp);
    } else {
      this.movementList = [];
    }
  }

  submitMovement(movement) {
    movement.id = new Date().getTime();
    this.movementList.push(movement);
    localStorage.setItem('movementList', JSON.stringify(this.movementList));
  }

  getMovementById(id: string){
    const found = this.movementList.find(m => m.id == id);
    console.log(found);
    return found;
  }

  getNew() {
    return {
      id: '',
      concept: '',
      amount: 1,
      dueDate: '',
      type: 'income',
      selectType: true
    };
  }
  changeSelector(movement) {
    movement.selectType = !movement.selectType;
    if (movement.selectType){
      this.states = this.incomesArray;
    } else {
       this.states = this.expendituresArray;
    }
    console.log(this.states);
 }
 getStates() {
   console.log(this.states);
   return this.states;
 }

}
