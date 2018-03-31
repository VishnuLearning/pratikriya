import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question;
  constructor() {
    this.question = new Question();
   }
  ngOnInit() {
  }
}
