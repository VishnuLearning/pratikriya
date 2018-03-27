import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'demo-choice',
  template: `
     <img [src]="imageurl" class="{{name}} over-{{index}}">
  `,
  styleUrls: ['./demochoice.component.scss']
})
export class DemochoiceComponent implements OnInit {
  @Input() type:number;
  @Input() index:number;
  imageurl:string;
  name:string;
  constructor() { }

  ngOnInit() {  
      this.imageurl = this.type==-1? 'assets/images/cross.svg' : 'assets/images/tick.svg';
      this.name = this.type==-1? 'cross' : 'tick';
  }
}