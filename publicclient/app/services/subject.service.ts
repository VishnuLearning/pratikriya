import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/request/subject';
@Injectable()
export class SubjectService {

  //formUrl:string = 'http://localhost:4000/forms/getForm?token=';
  subjectUrl: string = 'assets/subjects.json';

  constructor(private http: HttpClient) { }

  getSubjects(token: string) {
    //let url = formUrl+token;
    let url = this.subjectUrl;
    return this.http.get<Subject[]>(url);
  }

}
