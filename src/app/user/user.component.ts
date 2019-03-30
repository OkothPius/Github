import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../users/user.service';
import { HttpClient } from '@angular/common/http'
import { Repository } from '../repository'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService], //add the providers to the component
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  repository: Repository;

  constructor(userService: UserService, private http: HttpClient) {
    this.users = userService.getUsers()
  }


  toogleDetails(index) {
    this.users[index].showDescription = !this.users[index].showDescription;
  }

  addNewUser(user) {
    let userLength = this.users.length;
    user.id = userLength + 1;
    user.completeDate = new Date(user.completeDate)
    this.users.push(user)
  }

  ngOnInit() {

    interface ApiResponse {
      name: string;
      repository: string;
    }

    this.http.get<ApiResponse>("be136fa5434c0e679623d9c7dab4ecfab826b34f").subscribe(data => {
      this.repository = new Repository(data.name, data.repository)
    })
  }

}
