import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  buttons: string[] = [
    '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '<-', '0', '=', '/'
  ];
  operands: string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(value => value.toString());
  operators: string[] = ['+', '-', '/', '*'];

  constructor() { }
}
