import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CoursComponent } from './cours/cours.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', component: AccueilComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'admission', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
