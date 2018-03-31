import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import {UserStateService} from './services/user-state.service';
import { FormlookupService } from './services/formlookup.service';
import { FormService } from './services/form.service';
import { WorkflowService } from './services/workflow.service';

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
import { FormSearchComponent } from './components/form-creator/form-search/form-search.component';
import { FeedbackFormComponent } from './components/form-creator/feedback-form/feedback-form.component';
import { FormDesignComponent } from './components/form-creator/form-design/form-design.component';
import { DesignchoiceComponent } from './components/form-creator/form-design/designchoice/designchoice.component';
import { DesignquestionComponent } from './components/form-creator/form-design/designquestion/designquestion.component';
import { DesignsectionComponent } from './components/form-creator/form-design/designsection/designsection.component';
import { SectionComponent } from './components/form-creator/feedback-form/section/section.component';
import { QuestionComponent } from './components/form-creator/feedback-form/question/question.component';
import { ChoiceComponent } from './components/form-creator/feedback-form/choice/choice.component';
import { ManagelaunchComponent } from './components/workflow/managelaunch/managelaunch.component';
import { ManageexecuteComponent } from './components/workflow/manageexecute/manageexecute.component';
import { ManagependingComponent } from './components/workflow/managepending/managepending.component';
import { CreateworkflowComponent } from './components/workflow/createworkflow/createworkflow.component';
import { StatComponent } from './components/workflow/stat/stat.component';
import { NotifierComponent } from './components/notifier/notifier.component';




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
    StageComponent,
    FormSearchComponent,
    FeedbackFormComponent,
    FormDesignComponent,
    DesignchoiceComponent,
    DesignquestionComponent,
    DesignsectionComponent,
    SectionComponent,
    QuestionComponent,
    ChoiceComponent,
    ManagelaunchComponent,
    ManageexecuteComponent,
    ManagependingComponent,
    CreateworkflowComponent,
    StatComponent,
    NotifierComponent

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
    UserStateService,
    FormlookupService,
    FormService,
    WorkflowService
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
