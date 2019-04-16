import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getLimitData() {
    return this.http.get("http://localhost:3000/users/limitdata").toPromise()
  }

  addUser(user: any) {

    return this.http.post("http://localhost:3000/users", user).toPromise()
  }

  addLimit(limit) {
    return this.http.post("http://localhost:3000/users/limit", limit).toPromise()
  }


}
