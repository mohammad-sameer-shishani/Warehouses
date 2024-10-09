import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private auth:AuthService){}

  email=new FormControl('',[Validators.required,Validators.email]);
  password =new FormControl('',[Validators.minLength(8),Validators.required]);


loginSubmit(){

console.log(this.email);
console.log(this.password);
  this.auth.Login(this.email.value,this.password.value)
}
}