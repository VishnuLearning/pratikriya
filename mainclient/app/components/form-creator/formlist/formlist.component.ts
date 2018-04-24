import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.scss']
})
export class FormlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  forms =[ 
    {
      title:"student feedback"
    },
    {
      title:"facult feedback"
    },
    {
      title:"CRT feedback"
    },
    {
      title:"Infrastructure feedback"
    },
    {
      title:"parents feedback"
    },
    {
      title:"campus placements feedback"
    },
    {
      title:"exams feedback"
    }
  
  ]

}
