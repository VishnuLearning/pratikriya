import { Component, OnInit, Input } from '@angular/core';
import { MatchorganizationService, Org} from '../../../services/matchorganization.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'orgselector-form',
  templateUrl: './orgselector.component.html',
  styleUrls: ['./orgselector.component.scss']
})
export class OrgselectorComponent implements OnInit {
  @Input() containerform: FormGroup;
  organization: FormGroup;
  organizationCtrl: FormControl;
  filteredOrganizations: any;
  selectedorg:Org;

  constructor(private _getorg: MatchorganizationService, private fb: FormBuilder) {
    this.filteredOrganizations = [];
    this.organization = fb.group({
      'selectedorg': [new Org(0,''), Validators.required]
    });
  }

  ngOnInit() {
    //this._getorg.getMatchingOrganizations(this.organizationCtrl.value).subscribe(res => this.filteredOrganizations = res);
    this.containerform.addControl('org', this.organization);

    this.organization.get('selectedorg').valueChanges.subscribe(val => {
      if(val && val.length>3) {
        this._getorg.getMatchingOrganizations(val).subscribe(res => this.filteredOrganizations = res);
      }
    })
  }

  displayFn(org?: Org): string | undefined {
    //console.log(org);
    return org ? org.name : undefined;
  }


}
