import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'ab-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.css']
})
export class NewMovementComponent implements OnInit {
  states=this.movementsService.states;

  constructor(private movementsService: MovementsService) { }


  ngOnInit() {
  }

  changeSelector(movement) {
    this.movementsService.changeSelector(movement);
    this.states = this.movementsService.getStates();
  }

}
