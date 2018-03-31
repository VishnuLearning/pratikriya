import { Component, OnInit } from '@angular/core';
import { Section } from '../../../models/section';
import { Form } from '../../../models/form';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.scss']
})
export class FormDesignComponent implements OnInit {
  form: Form;
  expanded:boolean[]=[true];
  constructor() {
    this.form = new Form();
  }
  ngOnInit() {
    this.form.sections.push(new Section());
  }

  deleteSection(i:number) {
    this.form.sections.splice(i,1);
    this.expanded.splice(i, 1);
    console.log(this.form.sections);
  }
  addSection(i:number) {
    this.form.sections.splice(i,0,new Section());
    console.log(this.form.sections);
  }

  submit(){
  //   const newform=new Form();
  //   newform.name=this.form.name;
  //   for(let i=0;i<this.form.sections.length;i++){
  //     newform.sections[i].name=this.form.sections[i].name;
  //   }
    console.log(this.form);
   }
}