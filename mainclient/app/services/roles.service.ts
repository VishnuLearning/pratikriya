import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RolesService {

  rolesUrl:string = 'assets/roles.json';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.rolesUrl);
  }

}
