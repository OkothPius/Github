import { Injectable } from '@angular/core';
import { Users } from "../users"
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private username: string;
  private clientid = '1ae2ba5d8370988b390a';
  private clientsecret = '1ae2ba5d8370988b390a';
  constructor(private http: Http) {
    console.log("service is now ready!");
    this.username = 'OkothPius';
  }
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.
      clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }
  getUserRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.
      clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());

  }
}
