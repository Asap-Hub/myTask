import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  private _name: string = " ";

  get name():any {
    return this._name; 
  } 

 
  set name (inputValue: string) {
    this._name = inputValue;
    console.log(inputValue);
  }

}
