import { Component, OnInit } from '@angular/core';
import { Section } from '../../../models/section';
import { Form } from '../../../models/form';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.scss']
})
export class FormDesignComponent implements OnInit {
  form:Form;
  constructor() {
    this.form=new Form();
   }
  ngOnInit() {
    this.form.sections=[];
  }
  section(){
    
    this.form.sections.push(new Section());
  }
}