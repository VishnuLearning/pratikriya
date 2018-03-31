import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../../models/section';
import { Question } from '../../../../models/question';
import { Form } from '../../../../models/form';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-designsection',
  templateUrl: './designsection.component.html',
  styleUrls: ['./designsection.component.scss']
})
export class DesignsectionComponent implements OnInit {
  @Input() section: Section;
  @Input() form: Form;
  panelOpenState: boolean = false;
  constructor() {
    this.section = new Section();
    this.form = new Form()
  }

  ngOnInit() {
    this.section.questions = [];
    this.section.questions.push(new Question());
  }

  addQuestion(i:number) {
    this.section.questions.splice(i, 0, new Question());
  }
  deleteQuestion(i:number) {
    console.log('deleting ' + i);
    this.section.questions.splice(i, 1);
  }
}
