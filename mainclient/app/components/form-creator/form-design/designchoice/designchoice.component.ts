import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../../../../models/choice';
import { Question } from '../../../../models/question';

@Component({
  selector: 'app-designchoice',
  templateUrl: './designchoice.component.html',
  styleUrls: ['./designchoice.component.scss']
})
export class DesignchoiceComponent implements OnInit {
  @Input() choice: Choice;
  @Input() question:Question;
  @Input() choiceIndex:number;
  constructor() {
    this.choice = new Choice();
    this.question=new Question();
  }
  ngOnInit() {
  }
  add() {
    this.question.choices.splice(this.choiceIndex + 1, 0, new Choice());
  }
  delete() {
    this.question.choices.splice(this.choiceIndex, 1);
  }
}
