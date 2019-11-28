import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements = this.movementsService.movementList;
  movementList$: Observable<any[]>;
  constructor(private movementsService: MovementsService) {
    this.movementList$ = this.movementsService.getMovements$();
  }

  ngOnInit() {}



}
