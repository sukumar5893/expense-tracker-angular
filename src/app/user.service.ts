import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://localhost:3000/users").toPromise()
  }

  addUser(user: any) {

    return this.http.post("http://localhost:3000/users", user).toPromise()
  }
}
