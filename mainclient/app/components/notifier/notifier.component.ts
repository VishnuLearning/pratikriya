import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {

  workflows=null;
  constructor(private _workflowService: WorkflowService) { }

  ngOnInit() {
    this._workflowService.getPendingWorkflows().subscribe(res => { this.workflows = res;});
  }

}
