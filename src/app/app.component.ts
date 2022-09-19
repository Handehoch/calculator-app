import { Component } from '@angular/core';
import {DataStorageService} from "./services/data-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular calculator';

  buttons: string[] = this.dataStorageService.buttons;

  constructor(private dataStorageService: DataStorageService) {
  }
}
