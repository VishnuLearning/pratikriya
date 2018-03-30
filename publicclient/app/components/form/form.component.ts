import { Component, OnInit, Input } from '@angular/core';
import {Form} from '../../models/request/form';
import {Subject} from '../../models/request/subject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() token:string;
  @Input() form:Form;
  @Input() subjects:Subject[];

  constructor(){}

  ngOnInit() {
    console.log(this.token);
  }

}
