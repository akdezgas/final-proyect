import { Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { EditComponent} from './edit/edit.component';
import { PlatesComponent} from './plates/plates.component';
import { NewPlateComponent} from './new-plate/new-plate.component';
import { SinglePlateComponent} from './single-plate/single-plate.component';
import { EditPlateComponent} from './edit-plate/edit-plate.component';
import { RequestsComponent} from './requests/requests.component';
import { NewRequestComponent} from './new-request/new-request.component';
import { SingleRequestComponent} from './single-request/single-request.component';
import { EditRequestComponent} from './edit-request/edit-request.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'user', component: UserComponent,
        children: [
          { path: 'login', component: LoginComponent},
          { path: 'signup', component: SignupComponent },
          { path: 'edit', component: EditComponent }
        ]
    }
];
