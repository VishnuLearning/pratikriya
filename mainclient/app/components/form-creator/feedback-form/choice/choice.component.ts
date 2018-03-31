import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../../../../models/choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() choice:Choice; 
  @Input() type:String;
  constructor() {
    this.choice=new Choice();
   }
  ngOnInit() {
  }
}
