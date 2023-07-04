import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  username!: string;
  password!: string;
  error!: boolean;

  constructor(private router: Router) {}

  userdashboard(): void {
    // Define your predefined usernames and passwords
    const predefinedCredentials = [
      { username: 'owner', password: 'password1', route: '/owner-dashboard' },
      { username: 'manager', password: 'password2', route: '/manager-dashboard' },
      { username: 'receptionist', password: 'password3', route: '/receptionist-dashboard' }
    ];

    // Check if the entered username and password match any of the predefined credentials
    const matchedCredential = predefinedCredentials.find(
      cred => cred.username === this.username && cred.password === this.password
    );

    if (matchedCredential) {
      // Redirect to the corresponding route based on the matched credential
      this.router.navigate([matchedCredential.route]);
    } else {
      // Handle invalid login credentials, show error message, etc.
      this.error = true;
    }
  }
}