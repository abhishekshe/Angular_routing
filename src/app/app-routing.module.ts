import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ParentdetailsComponent } from './parentdetails/parentdetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:"about", component:AboutusComponent},
  {path:"contact", component:ContactusComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'dashboard/:id', component:DashboardComponent},
  {path:"student",
  children:[
    {path:"",component:StudentComponent},
    {path:"studentdetails",
  children:[
    {path:'', component:StudentdetailsComponent},
    {path:'contactdetails', component:ContactdetailsComponent},
    {path:'Parentdetails', component:ParentdetailsComponent},

  ]},
    {path:"studentregistration", component:StudentregistrationComponent},



  ]},
  
 
  {path:"**" , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
