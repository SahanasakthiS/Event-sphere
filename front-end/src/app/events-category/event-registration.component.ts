import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-registration',
  standalone: true,
  imports: [MatSnackBarModule, CommonModule,ReactiveFormsModule, MatCardModule, MatRadioModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  eventId: number = 0;
  event: any;
  registrationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      college: ['', Validators.required],
      paymentMethod: ['online', Validators.required]
    });
  }

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get('eventId')!;
    
    // Here you would typically fetch event details from a service based on eventId
    this.event = {
      id: this.eventId,
      name: 'Sample Event',
      fee: '₹500'
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Here you would typically send the registration data to your backend
      console.log('Registration data:', this.registrationForm.value);
      
      this.snackBar.open('Registration successful!', 'Close', {
        duration: 3000
      });
      
      this.router.navigate(['/dashboard']);
    }
  }
}