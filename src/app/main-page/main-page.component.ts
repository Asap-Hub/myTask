import { FirstAppService } from './../service/first-app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
 
  private _name: string = " ";

  public Names: any;
//constructors handles dependency injections
  
  constructor(service: FirstAppService) {
    this.Names = service.getAllUsers();
    console.log(this.Names);
  }
  get name():any {
    return this._name; 
  } 

 
  set name (inputValue: string) {
    this._name = inputValue;
    console.log(inputValue);
  }

}
 
