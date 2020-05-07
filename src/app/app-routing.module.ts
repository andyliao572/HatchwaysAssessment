import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {DispStudentsComponent} from './disp-students/disp-students.component'


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Students', component: DispStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
