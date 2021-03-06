import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { SessionService } from "./session.service";
import { RequestService } from './request.service';
import { ReviewService } from './review.service';
import { PlateService } from './plate.service';

import { FileUploadModule } from "ng2-file-upload";


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
import { LogoutComponent } from './logout/logout.component';
import { SelectComponent } from './select/select.component';
import { PlatesLocationComponent } from './plates-location/plates-location.component';
import { RequestsLocationComponent } from './requests-location/requests-location.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
import { DatePickerModule } from 'ng2-datepicker';
import { NewMessageComponent } from './new-message/new-message.component';
import { InboxComponent } from './inbox/inbox.component';

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
    EditRequestComponent,
    LogoutComponent,
    SelectComponent,
    PlatesLocationComponent,

    RequestsLocationComponent,
    NewMessageComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfxSGOIenLgP6yg723v0j4ZdTLay_Vjz0'
    })
  ],
  providers: [SessionService, ReviewService, RequestService, PlateService],
  bootstrap: [AppComponent]
})


export class AppModule { }
