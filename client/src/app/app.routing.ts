import { Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { EditComponent} from './edit/edit.component';
import { LogoutComponent} from './logout/logout.component'
import { PlatesComponent} from './plates/plates.component';
import { NewPlateComponent} from './new-plate/new-plate.component';
import { SinglePlateComponent} from './single-plate/single-plate.component';
import { EditPlateComponent} from './edit-plate/edit-plate.component';
import { RequestsComponent} from './requests/requests.component';
import { NewRequestComponent} from './new-request/new-request.component';
import { SingleRequestComponent} from './single-request/single-request.component';
import { EditRequestComponent} from './edit-request/edit-request.component';
import { SelectComponent } from './select/select.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'user', component: UserComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignupComponent },
          { path: ':id/edit', component: EditComponent }
        ]
    },
    { path: 'select', component: SelectComponent},
    { path: 'plates', component: PlatesComponent,
        children:[
          { path: 'new', component: NewPlateComponent},
          { path: ':id', component: SinglePlateComponent},
          { path: ':id/edit', component: EditPlateComponent}
        ]
      },
    { path: 'requests', component: RequestsComponent,
        children:[
          {path: 'new', component: NewRequestComponent},
          {path: ':id', component: SingleRequestComponent},
          {path: ':id/edit', component:EditRequestComponent}
        ]
      },
    { path: '**', redirectTo: '' }
];
