import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { PostFormComponent } from '../post-form/post-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [PostFormComponent, CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})

export class AdminDashboardComponent implements OnInit {
  showPostForm = false;
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  openPostForm(): void {
    this.showPostForm = true;
  }

  handlePostSubmission(event: any): void {
    this.showPostForm = false;
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }
}

