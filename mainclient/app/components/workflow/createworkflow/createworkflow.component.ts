import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Workflow } from '../../../models/workflow';
import { Stage } from '../../../models/stage';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './createworkflow.component.html',
  styleUrls: ['./createworkflow.component.scss']
})
export class CreateworkflowComponent implements OnInit {
  @Input() id = 0;
  workflow: Workflow = null;
  stageForms: FormGroup[] = [];
  stages: Stage[] = [];
  workflowDetailsForm: FormGroup;
  subject: FormGroup;
  constructor(private _workflowService: WorkflowService, private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.workflow = new Workflow(null);
    this.workflowDetailsForm = this._fb.group({
      name: ['', Validators.required]
    });
    this.subject = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this._workflowService.getWorkflow().subscribe(res => {
      if (res) {
        console.log(res);
        this.workflow = new Workflow(res);
        // this.form.get('name').setValue(this.workflow.name);
        this.workflow.stages.forEach((stage, i) => {
          this.stageForms.push(this.createStage(i));
        });
      }
    });
  }

  createStage(i: number) {
    if (i === 0) {
      return this._fb.group({
        'title': ['', Validators.required],
        'emails': ['', Validators.required],
        'message': ['', Validators.required]
      });
    } else {
      return this._fb.group({
        'title': ['', Validators.required],
        'message': ['', Validators.required]
      });
    }
  }

  addStage(i: number) {
    const s = new Stage(null);
    this.stageForms.splice(i, 0, this.createStage(i));
    this.workflow.stages.splice(i, 0, s);
  }
  removeStage(i: number) {
    this.stageForms.splice(i, 1);
    this.workflow.stages.splice(i, 1);
  }


  submit() {
    console.log(this.workflow);
    this._workflowService.create(this.workflow);
  }
}