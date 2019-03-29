import { Component, OnInit } from '@angular/core';
import { User } from '../user'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [
    new User(1, 'Tony', new Date(2018, 5, 12)),
    new User(2, 'Andre', new Date(2017, 7, 6)),
    new User(3, 'Clark', new Date(2019, 11, 24)),

  ]


  toogleDetails(index) {
    this.users[index].showDescription = !this.users[index].showDescription;
  }

addNewUser(user){
  let userLength = this.users.length;
  user.id=userLength+1;
  user.completeDate = new Date(user.completeDate)
  this.users.push(user)
} 
  constructor() { }

  ngOnInit() {
  }

}
