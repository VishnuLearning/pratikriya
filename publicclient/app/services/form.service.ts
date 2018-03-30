import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/request/form';
@Injectable()
export class FormService {

  //formUrl:string = 'http://localhost:4000/forms/getForm?token=';
  formUrl: string = 'assets/form.json';

  constructor(private http: HttpClient) { }

  getForm(token: string) {
    //let url = formUrl+token;
    let url = this.formUrl;
    return this.http.get<Form>(url);
  }


}
