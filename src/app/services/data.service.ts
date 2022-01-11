import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUserName:any
  currentAcno:any


  users: any = {
    1000: { acno: 1000, uname: "aswathy", pswd: "zero", balance: 6000,transaction:[] },
    1001: { acno: 1001, uname: "vishnu", pswd: "one", balance: 6000,transaction:[] },
    1002: { acno: 1002, uname: "ram", pswd: "two", balance: 8000,transaction:[] },
  }

  constructor() { 
    this.getDetails()
  }

  //to save to localstorage
  saveDetails(){
    if(this.users){
      localStorage.setItem("userDb",JSON.stringify(this.users))
    }
    if(this.currentUserName){
      localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcnoLocal",JSON.stringify(this.currentAcno))
    }
  }
  //to get from localstorge

  getDetails(){
    if(localStorage.getItem("userDB")){
      this.users=JSON.parse(localStorage.getItem("userDB") || '' )
    }
    if(localStorage.getItem("cUserName")){
      this.currentUserName=JSON.parse(localStorage.getItem("cUserName") || '' )
    }
    if(localStorage.getItem("currentAcnoLocal")){
         this.currentAcno=JSON.parse(localStorage.getItem("currentAcnoLocal") || '' )
   
    }
  }

 register(acno: any, pswd: any, uname: any) {

    let db = this.users

    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno,
         uname,
          pswd,
           balance: 0,
           transaction:[],

      }
      this.saveDetails()
      return true
    }
  }


  login(acno: any, password: any) {

    let database = this.users

    if (acno in database) {
      if (password == database[acno]["pswd"]) {
        this.currentAcno=acno
        this.currentUserName=database[acno]["uname"]
        this.saveDetails()
         return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }
//transaction 
getTransaction(){

  console.log( this.users[this.currentAcno].transaction);
  
   return this.users[this.currentAcno].transaction
}
//deposit amount
  deposit(acno: any, password: any, amt: any) {

    var amount = parseInt(amt)

    let db = this.users

    if (acno in db) {
      if (password == db[acno]["pswd"]) {
        db[acno]["balance"] = db[acno]["balance"] + amount
        db[acno].transaction.push({
          amount:amount,
          type:"CREDIT"
        })
        this.saveDetails()
        return db[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("account does not exist")
      return false
    }
  }


  withdraw(acno: any, password: any, amt: any) {

    var amount = parseInt(amt)

    let db = this.users

    if (acno in db) {

      if (password == db[acno]["pswd"]) {

        if (db[acno]["balance"] > amount) {
          db[acno]["balance"] = db[acno]["balance"] - amount
//transaction history
          db[acno].transaction.push({
            amount:amount,
            type:"DEBIT"
          })
          this.saveDetails()
          return db[acno]["balance"]
        }
         else {
          alert("insufficient balance")
          return false
        }


      } else {
        alert("incorrect password")
        return false
      }
    } else {
      alert("account doesnot exist...")
      return false
    }

  }

}
