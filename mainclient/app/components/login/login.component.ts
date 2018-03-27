import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
    selector: "login",
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    loading = false;
    returnUrl: string;
    email:string='';
    password:string='';
    emailControl = new FormControl('', [Validators.required, Validators.email]);
    hide = true;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService) {
    }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    getErrorMessage() {
        return this.emailControl.hasError('required') ? 'You must enter a value' :
            this.emailControl.hasError('email') ? 'Not a valid email' :
                '';
    }

    login() {
        this.loading = true;
        this.authService.login(this.email, this.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}