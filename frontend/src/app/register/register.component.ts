import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   registerData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgree: false
  };

    onSubmit() {
    // Handle registration logic here
    console.log('Registration attempt:', this.registerData);
    
    // Add validation logic here
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    
    // Submit form if valid
  }
}
