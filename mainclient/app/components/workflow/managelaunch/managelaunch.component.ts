import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-managelaunch',
  templateUrl: './managelaunch.component.html',
  styleUrls: ['./managelaunch.component.scss']
})
export class ManagelaunchComponent implements OnInit {

  stats:any;
  constructor(private _workflowService: WorkflowService) { }
  workflows: any;
  ngOnInit() {
    this._workflowService.getToLaunchWorkflows().subscribe(res => { this.workflows = res;});
  }
  show(w:any) {
    console.log(w);
    this._workflowService.getWorkflowStatus(w._id).subscribe(res=>{
      this.stats = res;
    });
  }
}
