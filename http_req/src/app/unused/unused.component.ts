import { Component, OnInit } from '@angular/core';
import { RandomInterface } from '../interfaces/random.interface';

@Component({
  selector: 'app-unused',
  templateUrl: './unused.component.html',
  styleUrls: ['./unused.component.css']
})
export class UnusedComponent implements OnInit, RandomInterface {
  value = 'hello'; // Rrequires by interface

  constructor() { }

  ngOnInit(): void {
  }

  aRequiredFunction() {
    return;
  }

}
