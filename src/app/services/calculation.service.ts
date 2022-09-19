import { Injectable } from '@angular/core';
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  handleOperation(first: string, second: string, command: string) {
    switch (command) {
      case '+':
        return (+first + +second).toString();
      case '-':
        return (+first - +second).toString();
      case '/':
        // if(+second === 0) {
        //   this.errorService.handle(`Can't divide by zero`);
        //   break;
        // }
        return (+first / +second).toString();
      case '*':
        return (+first * +second).toString();
    }

    return '';
  }
}
