import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-std-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, FormsModule, RegisterComponent],
  templateUrl: './std-dashboard.component.html',
  styleUrl: './std-dashboard.component.scss'
})
export class StdDashboardComponent implements OnInit {

  events: any[] = [];
  showRegistrationForm = false;
  selectedEvent: any = null;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(events => {
      // Convert image to base64 Data URL for display
      this.events = events.map(event => ({
        ...event,
        imageUrl: 'data:' + event.fileType + ';base64,' + event.image
      }));
    });
  }

  openRegistrationForm(event: any): void {
    this.selectedEvent = event;
    this.showRegistrationForm = true;
  }

  closeRegistrationForm(): void {
    this.showRegistrationForm = false;
    this.selectedEvent = null;
  }

  // Remove handleRegistration from here; handle registration in registration component separately

}
