import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements = ['Compra super', 'Curso Angular', 'Cañas pablo'];
  constructor() { }

  ngOnInit() {
  }

}
