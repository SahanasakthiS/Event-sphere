import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  hidePassword = true;
  
  student = {
    name: 'John Doe',
    rollNo: '12345',
    registerNo: 'REG2023001',
    password: 'securepassword123'
  };

  constructor(private router: Router) {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goBack() {
    this.router.navigate(['/std-dashboard']);
  }
}
