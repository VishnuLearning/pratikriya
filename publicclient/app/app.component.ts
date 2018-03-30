import { Component, OnInit} from '@angular/core';
import { FormService } from './services/form.service';
import { SubjectService } from './services/subject.service';
import {Form} from './models/request/form';
import {Subject} from './models/request/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*
   In the app component we should get the token
   then we should have services to fetch the form and the subject
   */
  title = 'app';
  token='';

  form:Form;
  subjects:Subject[];

  constructor(private _formservice:FormService, private _subjectservice:SubjectService) {
  }

  ngOnInit() {
    this._formservice.getForm(this.token).subscribe(res=>{
      console.log(res);
      this.form=res;
      console.log(this.form);
    });

    this._subjectservice.getSubjects(this.token).subscribe(res=>{
      console.log(res);
      this.subjects=res;
      console.log(this.form);
    });

    //how to get parameter from get request in angular
    
  }

}
