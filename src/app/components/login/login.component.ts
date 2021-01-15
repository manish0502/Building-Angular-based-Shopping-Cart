import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  
  constructor() { }

  ngOnInit(): void {
  }
  login(e ,form: NgForm) {
    
   e.preventDefault();
    console.log(this.model)
    form.reset()
  }
 
 

}
