import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class WorkflowService {

  currentUser:User;

  constructor(private http: HttpClient) { 
    //Object.assign(this.currentUser, JSON.parse(localStorage.getItem('currentUser')));
  }
  
  getPendingWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/pending.json');
  }

  getToLaunchWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/tolaunch.json');
  }

  getToExecuteWorkflows() {
    // TODO: user email must be used to connect with backend
    return this.http.get('assets/workflows/toexecute.json');
  }
  apiurl = 'assets/workflows/workflow.json';

  getWorkflow() {
    //TODO: update url and put id as a e.g. this.apiurl+id
    const u = this.apiurl;
    return this.http.get(u);
}
}