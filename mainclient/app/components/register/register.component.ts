import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

import { RolesService } from '../../services/roles.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    loading:boolean;
    regiForm: FormGroup;
    name: string = '';
    email: string = '';
    password: string = '';
    cnfpassword: string = '';
    designation: string = '';
    role: string = '';
    roles: any = [];
    roleid: number = 3;
    orgerror: boolean = false;

    constructor(
        private fb: FormBuilder,
        private _roles: RolesService,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        //this.email = new FormControl('', [Validators.required, Validators.email]);
        //this.password = new FormControl('', [Validators.required, Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")]);
    }

    ngOnInit() {
        this._roles.getRoles().subscribe(res => this.roles = res);
        this.regiForm = this.fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            'cnfpassword': [null, Validators.required],
            'role': [null, Validators.required],
            'designation': [null, Validators.required],
            'org': [null, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        console.log(form);
        console.log(this.regiForm.get("org").valid);
        for (let ctrl in (this.regiForm.get("org") as FormGroup).controls) {
            if (!this.regiForm.get("org").get(ctrl).value) {
                this.regiForm.get("org").get(ctrl).markAsDirty();
                this.regiForm.get("org").get(ctrl).markAsTouched();
            }
        }

        console.log(this.regiForm.get("org").valid);


        if (!this.regiForm.get("org") || !this.regiForm.get("org").valid) {
            console.log("invalid org");
        }

        if(this.regiForm.valid && this.regiForm.get("org").valid) {
            this.register(form);
        }
    }

    onRoleChange() {
        this.roleid = this.regiForm.get('role').value;
    }

    register(form: NgForm) {
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
    }
}