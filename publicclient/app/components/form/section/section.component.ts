import { Component, OnInit, Input } from '@angular/core';
import {Section} from "../../../models/request/section";
import {Subject} from '../../../models/request/subject';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section:Section;
  @Input() subjects:Subject[];
  constructor() { }

  ngOnInit() {
  }

}
