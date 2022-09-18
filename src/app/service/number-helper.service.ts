import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberHelperService {

  constructor() { }

  public isNumeric(str: string) {
    return !isNaN(Number(str));
  }
}
