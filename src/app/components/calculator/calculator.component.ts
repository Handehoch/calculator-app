import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input: string = '';
  buttons: string[] = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '<-', '0', '=', '\\'];

  constructor() { }

  onButtonClick(value: string): void {
    this.input += value;
  }

  getButtonClass(value: string) {
    if(this.isNumeric(value)) {
      return 'operand';
    }

    if(value === '<-') {
      return 'backspace';
    }

    return 'operator';
  }

  private isNumeric(str: string) {
    return !isNaN(parseFloat(str))
  }

  ngOnInit(): void {

  }

}
