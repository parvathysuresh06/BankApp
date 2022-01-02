import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  

  constructor(private router:Router,private ds:DataService) { }

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

  let result=this.ds.login(acno,password) //call login which is iinside the dataservice

  
  if(result){
    alert("sucess")
this.router.navigateByUrl('dashboard')
  }

}}

