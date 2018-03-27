import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'organization-form',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  @Input() containerform:FormGroup;
  organizationreg:FormGroup;
  orgname:string='';
  address:string='';
  contactemail:string='';
  contactphone:string='';
  city:string='';
  state:string='';
  country:string='';
  zip:string='';

  constructor(private fb: FormBuilder) { 
    this.organizationreg = fb.group({  
      'orgname' : ['', Validators.required],  
      'address' : [null, Validators.required],  
      'city' : [null, Validators.required],  
      'state' : [null, Validators.required],  
      'country':[null, Validators.required],  
      'zip':[null, Validators.required],  
      'contactemail':[null, Validators.compose([Validators.required,Validators.email])],  
      'contactphone':[null, Validators.required]  
    });  
  }

  ngOnInit() {
    this.containerform.addControl('org', this.organizationreg);
  }

}
