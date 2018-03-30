import { Component, OnInit, Input } from '@angular/core';
import {Choice} from '../../../models/request/choice';
import {Question} from '../../../models/request/question';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() choice:Choice;
  @Input() val:number;
  @Input() question:Question;
  constructor() { }

  ngOnInit() {
  }

}
