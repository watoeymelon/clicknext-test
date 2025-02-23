import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const success = this.authService.login(this.email, this.password);

    if (!success) {
      this.message = '❌ Invalid email or password!';
    }
  }
}
