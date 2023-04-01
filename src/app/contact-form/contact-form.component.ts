import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  state(x:any) {
    console.log(x)
  }

  submit(f:NgForm){
    console.log(f)
  }

  options = [
    {id:1, name:"free" },
    {id:2, name:"Family Pack Account" },
    {id:3, name:"Premium Account" },
    {id:4, name:"Legacy Account" }, 
      ]
}
