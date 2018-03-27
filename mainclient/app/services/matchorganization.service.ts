import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms/src/model';

export class Org {
  constructor(public id: number, public name: string) { }
}

export function ValidateOrg(control: AbstractControl) {
  if(control.value && control.value.id) return null;
  return { validOrg: true };
}

@Injectable()
export class MatchorganizationService {

  getOrgUrl: string = 'http://localhost:4000/organizations/getorganizations';

  constructor(private http: HttpClient) { }

  getMatchingOrganizations(searchtext: string) {
    //update url with searchtext param and filet in node or database
    //can implement local storage in the service later as well
    return this.http.post(this.getOrgUrl,{"substring":searchtext});
  }

}
