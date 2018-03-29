import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    private currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));

    loggedInUser(){
        return this.currentUser.asObservable();
    }
    login(email: string, password: string) {
        console.log(email, password);
        return this.http.post<any>('/users/authenticate', { "email": email, "password": password }, httpOptions)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // update the currentUser to the object
                    this.currentUser.next(JSON.stringify(user));
                    //console.log(this.currentUser.value);
                    localStorage.setItem('currentUser', this.currentUser.value);
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser.next(null);
        // update currentUser to null
    }
}