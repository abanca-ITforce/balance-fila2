import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovementsService {

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

}
