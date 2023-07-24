import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Service/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  userName : string = '';
  logedIn:boolean=false;
  constructor(private router: Router, private common: CommonService) { }
  

  ngOnInit(): void {
  
    const userObj  = JSON.parse(localStorage.getItem('userDetails'));
    this.userName = userObj?.username;
    
    if(this.userName){
      this.logedIn= true;
      this.common.setData(true);
      this.common.setUserName(this.userName);
      console.log(this.logedIn);
    }
    else {
      this.logedIn= false;
      this.common.setData(false);
      this.common.setUserName('');
    }
    console.log(this.userName);
  }

  logout(){
  
    this.userName = "";
    //this.logedIn= false;
    this.common.setData(false);
    this.common.setUserName('');
    localStorage.clear();
    this.router.navigate(['home']);
  }

  redirectPage(){
    this.router.navigate(['home']);
  }

  ngAfterContentChecked(){
    this.logedIn=this.common.getData();
    this.userName=this.common.getUserName();
  }
  
 

}
