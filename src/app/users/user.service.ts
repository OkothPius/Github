import { Injectable } from '@angular/core';
import {Users} from "../users"

@Injectable()
export class UserService {
  getUsers() {
  return Users;
}
}
