import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-manageexecute',
  templateUrl: './manageexecute.component.html',
  styleUrls: ['./manageexecute.component.scss']
})
export class ManageexecuteComponent implements OnInit {

  stats:any;
  constructor(private _workflowService: WorkflowService) { }
  workflows: any;
  ngOnInit() {
    this._workflowService.getToExecuteWorkflows().subscribe(res => { this.workflows = res;});
  }
  show(w:any) {
    console.log(w);
    this._workflowService.getWorkflowStatus(w._id).subscribe(res=>{
      this.stats = res;
    });
  }
}
