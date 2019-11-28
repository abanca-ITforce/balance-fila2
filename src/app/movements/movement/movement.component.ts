import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementsService } from 'src/app/movements.service';


@Component({
  selector: 'ab-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  movementTitle: string;
  movement$;

  constructor(activatedRoute: ActivatedRoute, movementsService: MovementsService) {
    const movementId = activatedRoute.snapshot.params.id;
    this.movement$ = movementsService.getTaskById$(movementId);
    console.log(this.movement$);
   }

  ngOnInit() {
  }

}
