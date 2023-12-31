import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotesComponent } from './components/notes/notes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateComponenetComponent } from './components/update-componenet/update-componenet.component';
import { PinComponent } from './components/pin/pin.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {
    path:'dashboard', component:DashboardComponent,
children:[
  { path:'allnotes', component:GetallnotesComponent},
          { path: 'trash', component:TrashComponent },
          { path: 'archive', component:ArchieveComponent },
          
        ]
       
        },
       
      {path:'update', component:UpdateComponenetComponent},
      {path:'pin', component:PinComponent} 
        


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
