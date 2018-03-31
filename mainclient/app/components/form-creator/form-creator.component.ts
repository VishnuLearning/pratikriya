import { Component, OnInit } from '@angular/core';
import { FormSearchResult } from '../../services/formlookup.service'

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})

export class FormCreatorComponent implements OnInit {
  selection:FormSearchResult = null;
  constructor() {
  }

  previewForm(f:FormSearchResult) {
    this.selection = f;
  }

  ngOnInit() {

  }

}