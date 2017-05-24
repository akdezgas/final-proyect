import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { SessionService } from "./session.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';
import { PlatesComponent } from './plates/plates.component';
import { NewPlateComponent } from './new-plate/new-plate.component';
import { SinglePlateComponent } from './single-plate/single-plate.component';
import { EditPlateComponent } from './edit-plate/edit-plate.component';
import { RequestsComponent } from './requests/requests.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { SingleRequestComponent } from './single-request/single-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    EditComponent,
    PlatesComponent,
    NewPlateComponent,
    SinglePlateComponent,
    EditPlateComponent,
    RequestsComponent,
    NewRequestComponent,
    SingleRequestComponent,
    EditRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
