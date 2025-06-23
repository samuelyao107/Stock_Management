import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };
  
  onSubmit() {
   
    console.log('Login attempt:', this.loginData);
  }
}


