import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AbstractControl } from '@angular/forms/src/model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class FormSearchResult {
  constructor(public _id: string, public name: string ) { }
}
/*
export function ValidateOrg(control: AbstractControl) {
  if(control.value && control.value.id) return null;
  return { validOrg: true };
}        */                                                                                                                                                                                                                            

@Injectable()
export class FormlookupService {

  formSearchUrl: string = 'assets/formsearchresult.json';

  constructor(private http: HttpClient) { }

  getMatchingForms(searchtext: string) {
    //update url with searchtext param and filet in node or database
    //can implement local storage in the service later as well
    //this.formSearchUrl ='/get/formList';
    return this.http.get<FormSearchResult[]>(this.formSearchUrl, httpOptions);

  }

  getAllForms() {
    //update url with searchtext param and filet in node or database
    //can implement local storage in the service later as well
    this.formSearchUrl ='/get/formList';
    return this.http.get<FormSearchResult[]>(this.formSearchUrl, httpOptions);

  }

}