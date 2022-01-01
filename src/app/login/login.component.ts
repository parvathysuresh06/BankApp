import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="welcome"
  // accno="type here"
  acno=""
  pswd=""
  users:any={
    1000:{acno:1000,uname:"neeer",password:"1000",balance:2000},
    1001:{acno:1000,uname:"ter",password:"1001",balance:2000},
    1002:{acno:1002,uname:"per",password:"1002",balance:2000},

  }

  constructor() { }

  ngOnInit(): void {
  }
//user defined functions are aalways below

acnoChange(event:any){
this.acno=event.target.value
console.log(this.acno); 
}


pwdChange(event:any){
  this.pswd=event.target.value
  console.log(this.pswd); 
  }
login(){
  var acno=this.acno
  var password=this.pswd

  let database=this.users

  if(acno in database){
    if(password ==database[acno]["password"]){
alert("sucess")

    }
    else{
      alert("incorrect")
    }
  }
else{
  alert("invalid acno")
}
}}

