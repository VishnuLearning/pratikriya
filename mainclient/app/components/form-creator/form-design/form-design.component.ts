import { Component, OnInit } from '@angular/core';
import { Section } from '../../../models/section';
import { Form } from '../../../models/form';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.scss']
})
export class FormDesignComponent implements OnInit {
  form: Form;
  expanded:boolean[]=[true];
  saved: any = null;
  constructor(private _formService:FormService) {
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
    this._formService.submitForm(this.form).
    subscribe(res=>{
      console.log(res);
      this.saved = res
    });
   }
}