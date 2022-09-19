import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import {InputErrorComponent} from "./components/input-error/input-error.component";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InputErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
