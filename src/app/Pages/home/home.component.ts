import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName : string = '';
  option : string = '';

  name: string = '';
  dropdownOptions: string[] = [];
  selectedOption: string = '';

  userList = [
    {name : 'test',isSelected : false},
    {name : 'ram',isSelected : false},
    {name : 'xyz',isSelected : false},
    {name : 'abc',isSelected : false},
    {name : 'shiv',isSelected : false},
    {name : 'sonu',isSelected : false},

  ]

  selectedUserArray: any= [];


  //userList: string[] = ['user1', 'user2', 'user3', 'anotheruser'];
  userInput: string = '';
  showUserList: boolean = false;
  filteredUsers: any[] = [];

  searchUser = "";
  mentionedUser: string;
  showMentionDropdown: boolean;


  constructor() { }
  ngOnInit(): void {
    
  }

  onNameChange() {
    // Split the name by "@" and set the dropdownOptions accordingly
    if (this.name) {
      this.dropdownOptions = this.name.split('@').filter(option => option.trim() !== '');
    } else {
      this.dropdownOptions = [];
    }

    // Set the default selected option to the first option in the dropdown
    this.selectedOption = this.dropdownOptions.length > 0 ? this.dropdownOptions[0] : '';
  }



  selectMentionedUser(username: string) {
    this.mentionedUser = username;
    this.showMentionDropdown = false;
  }

 

  onInputChange(input: any): void {
    
    this.showUserList = input.target.value.includes('@');
    if (this.showUserList) {
      const searchTerm = input.target.value.split('@')[1].trim();
      this.filteredUsers = this.userList.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }

  selectedUser(event,index){
    console.log("gchjchjc", index);
    this.userList[index].isSelected =true;
  }
  removeUser(event,index){
    console.log("gchjchjc", index);
    this.userList[index].isSelected =false;
  }
  

}
