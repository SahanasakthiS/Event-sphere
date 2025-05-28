import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppComponent,LandingComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
 
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  if (this.loginForm.valid) {
    this.isLoading = true;
    const { userId, password } = this.loginForm.value;

    this.http.post('http://localhost:8080/admin/login', { userId, password }, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('Login Success:', response);
          this.isLoading = false;
          this.router.navigate(['/admin']);  
        },
        error: (error) => {
          console.error('Login Failed:', error);
          this.isLoading = false;
          alert('Invalid credentials'); 
        }
      });

  } else {
    this.loginForm.markAllAsTouched();
  }
}


  socialLogin(provider: 'google' | 'microsoft'): void {
    this.isLoading = true;
    console.log(`Logging in with ${provider}`);
    
    // Simulate social login
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/admin']);
    }, 1500);
  }
}