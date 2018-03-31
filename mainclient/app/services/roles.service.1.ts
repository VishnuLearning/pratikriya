import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RolesService {

  rolesUrl:string = 'http://localhost:4000/roles/getroles';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.rolesUrl);
  }

}
