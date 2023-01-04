import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LanguageComponent } from './components/language/language.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { DiplomaComponent } from './components/diploma/diploma.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DocStudentComponent } from './components/doc-student/doc-student.component';
import { DocEmployeComponent } from './components/doc-employe/doc-employe.component';
import { EmployeComponent } from './components/employe/employe.component';
import { DepartmentComponent } from './components/department/department.component';
import { CourseComponent } from './components/course/course.component';
import { DepartmentService } from './services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    LandingPageComponent,
    HomeComponent,
    RegisterComponent,
    LanguageComponent,
    AdmissionComponent,
    DiplomaComponent,
    EnrollmentComponent,
    PaymentComponent,
    DocStudentComponent,
    DocEmployeComponent,
    EmployeComponent,
    DepartmentComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DepartmentService, EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
