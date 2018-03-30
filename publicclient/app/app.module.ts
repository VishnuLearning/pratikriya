import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {MaterialdesignModule} from "./modules/materialdesign/materialdesign.module";
//import { AngularmaterialModule } from "./modules/materialdesign/materialdesign.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//register services
import {FormService} from './services/form.service';
import {SubjectService} from './services/subject.service';

// register components
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SectionComponent } from './components/form/section/section.component';
import { QuestionComponent } from './components/form/question/question.component';
import { ChoiceComponent } from './components/form/choice/choice.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SectionComponent,
    QuestionComponent,
    ChoiceComponent,
    FormComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialdesignModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  //  AngularmaterialModule,
  ],
  providers: [FormService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
