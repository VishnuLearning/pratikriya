import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { ManageexecuteComponent } from './components/workflow/manageexecute/manageexecute.component';
import { ManagelaunchComponent } from './components/workflow/managelaunch/managelaunch.component';
import { ManagependingComponent } from './components/workflow/managepending/managepending.component';
import { CreateworkflowComponent } from './components/workflow/createworkflow/createworkflow.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AuthGuard } from './guards/auth.guard';
import { FormDesignComponent } from './components/form-creator/form-design/form-design.component';
import {FormlistComponent} from './components/form-creator/formlist/formlist.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'get', component: FormCreatorComponent},// canActivate: [AuthGuard] },
  { path: 'set', component: WorkflowComponent, canActivate: [AuthGuard] },
  { path: 'go', component: AnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'newform', component: FormDesignComponent, canActivate: [AuthGuard] },
  { path: 'formList', component: FormlistComponent},// canActivate: [AuthGuard] },
  { path: 'set/manageworkflows', component: ManagelaunchComponent, canActivate: [AuthGuard] },
  { path: 'set/executeworkflows', component: ManageexecuteComponent, canActivate: [AuthGuard] },
  { path: 'set/completeworkflows', component: ManagependingComponent, canActivate: [AuthGuard] },
  { path: 'set/createworkflow', component: CreateworkflowComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
