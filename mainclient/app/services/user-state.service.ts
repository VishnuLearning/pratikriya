import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../models/user';
@Injectable()
export class UserStateService {

  constructor() { }
  private state = new BehaviorSubject<boolean>(false);
  caste = this.state.asObservable();
  loggedIn(currentState){
    if(localStorage.getItem('currentUser')){
      this.state.next(currentState);
    }
    
  }
}
