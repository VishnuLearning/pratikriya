import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormSearchResult } from '../../../services/formlookup.service';
import { Form } from '../../../models/form';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})

export class FeedbackFormComponent implements OnInit {
  form: Form;
  @Input() selectedForm:FormSearchResult=null;
  constructor(private _form: FormService) {
    this.form = new Form();
  }
  ngOnInit() {
    console.log(this.selectedForm)
    this._form.getForm(this.selectedForm._id).subscribe(res => {
      this.form =  Object.assign(this.form, res[0]);
      console.log(this.form);
    }
    );
  }
  fun(){
    console.log("helloowrold");
  }
}


