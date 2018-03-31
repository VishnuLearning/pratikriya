import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../../../../models/choice';

@Component({
  selector: 'app-designchoice',
  templateUrl: './designchoice.component.html',
  styleUrls: ['./designchoice.component.scss']
})
export class DesignchoiceComponent implements OnInit {
  @Input() choice: Choice;
  constructor() {
    this.choice = new Choice();
  }
  ngOnInit() {
  }

}
