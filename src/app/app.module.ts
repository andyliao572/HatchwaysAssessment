import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {studentApiService} from '../app/services/studentapi.service';
import { DispStudentsComponent } from './disp-students/disp-students.component'
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    DispStudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [studentApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
