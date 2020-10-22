import { Component, OnInit } from '@angular/core';

// form controle
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  userMessage = new FormGroup({
    email: new FormControl(''),
    text: new FormControl('')
  });
 
  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
      var a = this.userMessage.value;
      console.log(a)
    }
   
}
