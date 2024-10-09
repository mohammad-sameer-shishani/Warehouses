import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastr: any;

  baseURL='https://localhost:7169/api/Login';
  constructor(private http:HttpClient,private router:Router) { }
  Login(email:any,password:any){
    var body={
      Email:email.toString(),
      Password:password.toString()
    }
    const headerDirc={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDirc)
    }
this.http.post(this.baseURL,body,requestOptions).subscribe((response:any)=>{
const Token={
  token:response.toString()
}
//save local Storage
localStorage.setItem('token',Token.token);
let data:any=jwtDecode(Token.token);
localStorage.setItem('user',JSON.stringify(data))
if(data.RoleId=="1"){
this.router.navigate(['admin/dashboard']);
}
else if (data.RoleId=="2") {
  this.router.navigate(['teacher'])
}

},err=>{
console.log('error while loging in')
this.toastr.error('Invalid Email or Password!!')
})
  }
  logout(){
    localStorage.clear();    
    this.router.navigate(['/account/login'])
  }
}


function jwtDecode(token: any): any {
  throw new Error('Function not implemented.');
}

