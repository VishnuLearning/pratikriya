import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { OrganizationComponent } from './organization/organization.component';

import { RolesService } from '../../services/roles.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    @ViewChild('org') org: OrganizationComponent;
    regiForm: FormGroup;
    name: string = '';
    email: string = '';
    password: string = '';
    cnfpassword: string = '';
    designation:string='';
    role: string = '';
    roles:any = [];
    roleid:number;

    constructor(
        private fb: FormBuilder,
        private _roles:RolesService,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        //this.email = new FormControl('', [Validators.required, Validators.email]);
        //this.password = new FormControl('', [Validators.required, Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")]);
    }

    ngOnInit() {
        this._roles.getRoles().subscribe(res=>this.roles = res);
        this.regiForm = this.fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            'cnfpassword': [null, Validators.required],
            'role': [null, Validators.required],
            'designation':[null, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        console.log(form);
        //register(form);
    }

    onRoleChange() {
        if(this.roleid==1 && this.regiForm.get('role').value!=1) {
            this.regiForm.removeControl('org');
        } else if (this.roleid>1 && this.regiForm.get('role').value==1) {
            this.regiForm.removeControl('org');
        }
        this.roleid = this.regiForm.get('role').value;
        
    }

    /*register(form: NgForm) {
        this.loading = true;
        this.userService.create(form)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }*/
}