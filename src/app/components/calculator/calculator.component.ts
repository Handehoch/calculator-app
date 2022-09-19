import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";
import {ErrorService} from "../../services/error.service";
import {CalculationService} from "../../services/calculation.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  input: string = '';
  @Input() buttons: string[] = [];

  private lastValue: string = '';
  private command: string = '';

  constructor(
    private dataStorageService: DataStorageService,
    private errorService: ErrorService,
    private calculationService: CalculationService
  ) { }

  getButtonClass(value: string) {

    if(value === '<-') {
      return 'backspace';
    }

    return 'arithmetic-symbol';
  }

  onButtonClick(value: string): void {

    if(this.dataStorageService.operands.includes(value)) {
      this.operandClick(value);
    } else if(this.dataStorageService.operators.includes(value)) {
      this.operatorClick(value);
    } else if(value === '<-') {
      this.backspaceClick();
    } else if(value === '=') {
      this.calculateAnswer();
    } else if(value === 'Clear') {
      this.clearAll();
    }

    this.errorService.clear();
  }

  clearAll() {
    this.command = '';
    this.input = '';
    this.lastValue = '';
    this.errorService.clear();
  }

  validateInput() {

    if(!isNaN(+this.input)) {
      return;
    }

    this.errorService.handle('Please, type only numeric values');
    this.input = '';
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
    this.input = this.calculationService.handleOperation(this.lastValue, this.input, this.command);
  }

  ngOnInit(): void {

  }
}
