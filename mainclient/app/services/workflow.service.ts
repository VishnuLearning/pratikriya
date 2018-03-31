import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Workflow } from '../models/workflow';

@Injectable()
export class WorkflowService {

  currentUser:User;

  constructor(private http: HttpClient) { 
    //Object.assign(this.currentUser, JSON.parse(localStorage.getItem('currentUser')));
  }

  create(workflow:Workflow) {
    this.http.post('/workflow', workflow);
  }
  
  getPendingWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/tocomplete.json');
  }

  getToLaunchWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/tolaunch.json');
  }

  getToExecuteWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/toexecute.json');
  }

  getPendingWorkflowStatus(id:string, stage:number) {
    return this.http.get('assets/workflows/pendingworkflow.json');
  }

  apiurl = 'assets/workflows/workflow.json';


  getWorkflowStatus(id:string) {
    console.log(id);
    if(id=='1') return this.http.get('assets/workflows/launchworkflow.json');
    else return this.http.get('assets/workflows/executeworkflow.json');
  }

  getWorkflow() {
    //TODO: update url and put id as a e.g. this.apiurl+id
    const u = this.apiurl;
    return this.http.get(u);
}
}