import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './components/admission/admission.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeComponent } from './components/employe/employe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'employe', component: EmployeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'admission', component: AdmissionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
