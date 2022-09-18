import {Component, OnInit} from '@angular/core';
import {NumberHelperService} from "../../service/number-helper.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // Не нравится, что дополнительные данные хранятся в компоненте

  input: string = '';
  buttons: string[] = [
    '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '<-', '0', '=', '/'
  ];

  private operands: string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    .map(value => value.toString());

  private operators: string[] = ['+', '-', '/', '*'];

  private lastValue: string = '';
  private command: string = '';

  constructor(private numberHelperService: NumberHelperService) { }

  getButtonClass(value: string) {

    if(this.numberHelperService.isNumeric(value)) {
      return 'operand';
    }

    if(value === '<-') {
      return 'backspace';
    }

    return 'operator';
  }

  //Не нравится куча ифов
  onButtonClick(value: string): void {

    if(this.operands.includes(value)) {
      this.operandClick(value);
    } else if(this.operators.includes(value)) {
      this.operatorClick(value);
    } else if(value === '<-') {
      this.backspaceClick();
    } else if(value === '=') {
      this.calculateAnswer();
    } else if(value === 'Clear') {
      this.clearAll();
    }
  }


  clearAll() {

    this.command = '';
    this.input = '';
    this.lastValue = '';
  }

  private calculateAnswer() {

    this.input = eval(this.lastValue + this.command + this.input);
  }

  private operandClick(value: string) {

    this.input += value;
  }

  private operatorClick(value: string) {

    this.lastValue = this.input;
    this.input = '';
    this.command = value;
  }


  private backspaceClick() {

    if(this.input.length === 0) {
      return;
    }

    this.input = this.input.slice(0, -1);
  }

  ngOnInit(): void {

  }

}
