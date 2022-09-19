import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // Не нравится, что дополнительные данные хранятся в компоненте

  input: string = '';
  @Input() buttons: string[] = [];

  private operands: string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(value => value.toString());
  private operators: string[] = ['+', '-', '/', '*'];

  private lastValue: string = '';
  private command: string = '';

  constructor() { }


  //тут тоже не нравится, что сравниваю в лоб строки
  getButtonClass(value: string) {

    if(value === '<-') {
      return 'backspace';
    }

    return 'arithmetic-symbols';
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

  private calculateAnswer() {
    this.input = eval(this.lastValue + this.command + this.input);
  }

  ngOnInit(): void {

  }
}
