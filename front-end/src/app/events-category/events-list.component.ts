import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [ MatIconModule, MatCardModule, CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  category: string = '';
  eventType: string = '';
  categoryName: string = '';
  
  events = [
    {
      id: 1,
      name: 'Basketball Tournament',
      college: 'ABC College',
      date: '2023-11-15',
      fee: '₹500',
      poster: 'assets/sports1.jpg'
    },
    {
      id: 2,
      name: 'Cricket Championship',
      college: 'XYZ University',
      date: '2023-11-20',
      fee: '₹700',
      poster: 'assets/sports2.jpg'
    }
    // Add more events as needed
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.eventType = this.route.snapshot.paramMap.get('type') || '';
    this.category = this.route.snapshot.paramMap.get('category') || '';
    
    // Set category name based on the category
    switch(this.category) {
      case 'sports':
        this.categoryName = 'Sports';
        break;
      case 'academic':
        this.categoryName = 'Academic';
        break;
      case 'finearts':
        this.categoryName = 'Fine Arts';
        break;
      default:
        this.categoryName = 'Event';
    }
    
    // Here you would typically fetch events from a service based on eventType and category
  }

  registerForEvent(eventId: number) {
    this.router.navigate(['/event-register', eventId]);
  }
}