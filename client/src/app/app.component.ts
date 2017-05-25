import { Component ,OnInit} from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  error: any;
  constructor( private session: SessionService,private router : Router) { }

  ngOnInit() {
    this.session.isLogged().subscribe( user => this.successCb(user));
    this.session.getLoginEmitter().subscribe(user => this.successCb(user));
  }

  logout(){
    this.session.logout().subscribe(
       () => {
         this.successCb(null)

       },
       (err) => this.errorCb(err));

  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
    this.router.navigate(['/'])
  }

}
