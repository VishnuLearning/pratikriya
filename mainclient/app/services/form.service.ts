import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Form} from '../models/form';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FormService {

  //private _form = new BehaviorSubject<Form>(new Form);
  //form:Form;
  formUrl:string = 'assets/form.json';
  formId:string = '';

  constructor(private http: HttpClient) { }

  getForm() {
    //this.formUrl = '/get/getForm';
    console.log("getForm");
    return this.http.get<Form>(this.formUrl, httpOptions);
  }
  
}
