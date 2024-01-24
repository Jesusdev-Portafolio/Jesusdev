import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ResumeComponent } from './Pages/resume/resume.component';

const routes: Routes = [
  
  {path:'', component: HomeComponent},
  {path:'cv', component: ResumeComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'} // ojo con esto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
