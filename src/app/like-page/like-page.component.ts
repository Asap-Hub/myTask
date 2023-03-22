import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-page',
  templateUrl: './like-page.component.html',
  styleUrls: ['./like-page.component.css']
})
export class LikePageComponent {
  counter: number = 9;
   turnOn: boolean = true;

  count(): any {
    if (this.turnOn =! this.turnOn) { 
      this.counter = this.counter++; 
      console.log(this.counter++);
      console.log(this.turnOn);
    }
    else if(this.turnOn == this.turnOn){ 
      this.counter = this.counter--; 
      console.log(this.counter--);
      console.log(this.turnOn);
    }
  }

}
