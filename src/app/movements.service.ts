import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovementsService {

  movementList;

  constructor() {
    const temp = localStorage.getItem('movementList');
    if (temp) {
      this.movementList = JSON.parse(temp);
    } else {
      this.movementList = [];
    }
  }

  submitMovement(movement) {
    this.movementList.push(movement);
    localStorage.setItem('movementList', JSON.stringify(this.movementList));
  }

  getNew() {
    return {
      concept: '',
      amount: 1,
      dueDate: '',
      type: 'income'
    };
  }

}
