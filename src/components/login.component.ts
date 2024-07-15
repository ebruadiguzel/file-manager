import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone :true,
  templateUrl: '../login.component.html',
  imports : [FormsModule]
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService) { }

  login(username:string, password:string) {
    debugger;
    this.authService.login(this.username, this.password);
  }
}
