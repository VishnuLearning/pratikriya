import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

 

  create(user:any) {
    console.log(user);
    return this.http.post('/users/register', user, httpOptions);
  }
/*
  update(user:any) {
    return this.http.put('/users/' + user._id, user, httpOptions);
  }

  delete(_id: string) {
    return this.http.delete('/users/' + _id);
  }

  getAll() {
    return this.http.get<User[]>('/users');
  }

  getById(_id: string) {
    return this.http.get('/users/' + _id);
  }*/
}
