import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Org {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class MatchorganizationService {

  getOrgUrl: string = 'assets/organizations.json';

  constructor(private http: HttpClient) { }

  getMatchingOrganizations(searchtext: string) {
    //update url with searchtext param and filet in node or database
    //can implement local storage in the service later as well
    return this.http.get(this.getOrgUrl);
  }

}
