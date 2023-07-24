import { Component, OnInit } from '@angular/core';
import { userDB } from 'src/app/Models/userDB.model';
import { UserDBService } from 'src/app/Service/user-db.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Service/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: userDB[] = [];

  constructor(private userService: UserDBService, private router: Router, private common: CommonService) {

  }
  logIn(getCredential: any) {
    const validateUser = this.userService.checkUsers(getCredential.userid, getCredential.password)
    console.log("hgchjchj", validateUser)
    if (validateUser) {
      localStorage.setItem('userDetails', JSON.stringify(validateUser));
      this.router.navigateByUrl('/dashboard');
      this.common.setData(true);
    }
    else {
      this.common.setData(false);
      alert("Userid or passwor is an invalid.");
      
    }
  }
  

  ngOnInit(): void {
  }

}
