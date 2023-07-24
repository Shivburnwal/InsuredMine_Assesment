import { Injectable } from '@angular/core';
import { userDB } from '../Models/userDB.model';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {
 

  private users: userDB[] = [
    { userid: 'abc@media.com', password: 'abc123', username: 'tom', isPrivateUser: true },
    { userid: 'def@media.com', password: 'def123' , username: 'dick', isPrivateUser: true },
  ];

  checkUsers(userid:string, password:string) {
  const validateUser = this.users.find((val,index)=>{
    return val.userid == userid && val.password == password
   })
   return validateUser;

  }

  constructor() { }
}
