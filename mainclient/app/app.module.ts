import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//modules
import { AppRoutingModule } from './app-routing.module';
import {MaterialdesignModule} from "./modules/materialdesign/materialdesign.module";

//guards
import { AuthGuard } from './guards/auth.guard';

//services
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { RolesService } from './services/roles.service';
import { MatchorganizationService } from './services/matchorganization.service';
import {UserStateService} from './services/user-state.service'

//helpers
import { ErrorInterceptorProvider} from './helpers/error.interceptor';
import { JwtInterceptorProvider} from './helpers/jwt.interceptor';

//components
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertDialog } from './components/alert/alertdialog';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemochoiceComponent } from './components/demo/demochoice/demochoice.component';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { OrganizationComponent } from './components/register/organization/organization.component';
import { OrgselectorComponent } from './components/register/orgselector/orgselector.component';
import { AboutComponent } from './components/about/about.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { StageComponent } from './components/workflow/stage/stage.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AlertDialog,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    DemoComponent,
    DemochoiceComponent,
    OrganizationComponent,
    OrgselectorComponent,
    AboutComponent,
    FormCreatorComponent,
    WorkflowComponent,
    AnalyticsComponent,
    StageComponent
  ],
  entryComponents: [AlertDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialdesignModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    RolesService,
    MatchorganizationService,
    ErrorInterceptorProvider,
    JwtInterceptorProvider,
    {provide: ErrorStateMatcher, 
    useClass: ShowOnDirtyErrorStateMatcher},
    UserStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
