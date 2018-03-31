import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../models/question';
import { Choice } from '../../../../models/choice';
import { Section } from '../../../../models/section';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-designquestion',
  templateUrl: './designquestion.component.html',
  styleUrls: ['./designquestion.component.scss']
})
export class DesignquestionComponent implements OnInit {
  @Input() question: Question;
  @Input() section: Section;
  constructor() {
    this.question = new Question();
    this.section = new Section();
  }
  ngOnInit() {
    this.question.choices = [];
    this.question.choices.push(new Choice());
  }


}
