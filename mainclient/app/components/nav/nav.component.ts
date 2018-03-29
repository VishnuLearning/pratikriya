import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: User;
  constructor(private authService: AuthenticationService,
              private router: Router
             ) { 
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.authService.loggedInUser().subscribe(user=>this.currentUser = user);
  }
  
  logout() {
    if(this.currentUser) this.authService.logout();
    this.router.navigate(['']);
  }
}