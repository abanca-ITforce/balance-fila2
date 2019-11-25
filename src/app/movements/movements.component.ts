import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements = [
    {id: 'super', description: 'Compra super'},
    {id: 'angular', description: 'Curso Angular'},
    {id: 'vacaciones', description: 'Vacaciones'}
  ];

  constructor() { }

  ngOnInit() {}



}
