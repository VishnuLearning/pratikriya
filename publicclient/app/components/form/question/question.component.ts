import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../../../models/request/question";
import { Section } from "../../../models/request/section";
import { Subject } from "../../../models/request/subject";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() section: Section;
  @Input() subjects: Subject[];
  constructor() { }

  ngOnInit() {
  }

}
