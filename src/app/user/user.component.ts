import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../users/user.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService], //add the providers to the component
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any[];
repos:any[];

  constructor(private userService: UserService, private http: HttpClient) {
    this.userService.getUserInfo().subscribe.(user => {
      console.log(user);
      this.user=user;
    });
    this.userService.getUserRepos().subscribe.(repos =>{
      console.log(repos);
      this.repos=repos;
    })
  }




  ngOnInit() {


  }

}
