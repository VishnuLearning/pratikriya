import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workflow-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() peoplecount:number;
  @Input() submissioncount:number;
  @Input() title:string;
  @Input() deadline:number;
  @Input() startdate:Date;

  constructor() { }
  percent:number;
  ngOnInit() {
    this.percent = 100*this.submissioncount/this.peoplecount;
  }

}
