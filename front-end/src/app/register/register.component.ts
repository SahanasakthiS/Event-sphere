import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRegistrationService } from '../event-registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  @Input() event: any;
  @Output() registrationSubmitted = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  registration: any = {
    username: '',
    rollNo: '',
    emailId: '',
    eventName: '',
    amount: 0
  };

  constructor(private registrationService: EventRegistrationService) {}

  ngOnInit(): void {
  if (this.event) {
    this.registration.eventName = this.event.title;
  }
}


  onSubmit(): void {
  console.log('Sending registration:', this.registration);

  // Assuming you have a service like this.registrationService.register(...)
  this.registrationService.register(this.registration).subscribe({
    next: (response) => {
      alert('Registration successful! 🎉');
      this.registrationSubmitted.emit(this.registration);
      window.location.reload(); // ✅ Refresh the page after success
    },
    error: (err) => {
      console.error('Registration failed:', err);
      alert('Registration failed. Please try again.');
    }
  });
}


  onCancel(): void {
    this.cancel.emit();
    window.location.reload();
  }
}
