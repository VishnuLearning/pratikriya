import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-managepending',
  templateUrl: './managepending.component.html',
  styleUrls: ['./managepending.component.scss']
})
export class ManagependingComponent implements OnInit {

  stats:any;
  emails='';
  constructor(private _workflowService: WorkflowService) { }
  workflows: any;
  ngOnInit() {
    this._workflowService.getPendingWorkflows().subscribe(res => { this.workflows = res;});
  }
  show(w:any) {
    console.log(w);
    this._workflowService.getPendingWorkflowStatus(w._id, w.stage).subscribe(res=>{
      this.stats = res;
    });
  }
  save() {
    console.log(this.emails);
  }
}
