import { Component, OnInit } from '@angular/core';
import { FormlookupService, FormSearchResult } from '../../services/formlookup.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators, Form } from '@angular/forms';
// import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})

export class FormCreatorComponent implements OnInit {

  form: FormGroup;
  filteredForms: any;
  allForms:any;
  selectedform: FormSearchResult;

  constructor(private _searchform: FormlookupService, private fb: FormBuilder) {
    this.filteredForms = [];
    this.form = fb.group({
      formname: ['']
    });
  }

  ngOnInit() {
    
    console.log(this.form);
    this._searchform.getAllForms().subscribe(res =>{
      console.log(res);
      this.allForms = res;
    } );
    this.form.get("formname").valueChanges.subscribe(val => {
      this.filteredForms=[];
      if (val && val.length > 3) {
        this.filteredForms = 
             this.allForms.filter(x=>x.name.toLowerCase().indexOf(val.toLowerCase())===0);
      }
    });
  }
  displayFn(form?: FormSearchResult): string | undefined {
    return form ? form.name : form.creator;
  }

}