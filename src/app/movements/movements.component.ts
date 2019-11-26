import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements = this.movementsService.movementList;

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {}



}
