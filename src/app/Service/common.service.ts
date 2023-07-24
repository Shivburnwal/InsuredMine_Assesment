import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  checkLoggedIn:boolean= false;
  userName: any = "";
  

  constructor( ) { }

  setData(data){

    this.checkLoggedIn = data;
    

  }

  getUserName(){
    const userObj  = JSON.parse(localStorage.getItem('userDetails'));
    this.userName = userObj?.username;
    return this.userName;
  }
  setUserName(userNameDisplay){
   this.userName=userNameDisplay;
  }

  getData(){
    return this.checkLoggedIn;
  }
}
