import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-category',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './events-category.component.html',
  styleUrl: './events-category.component.scss'
})
export class EventsCategoryComponent {
  eventType: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.eventType = this.route.snapshot.paramMap.get('type') || '';
  }

  navigateToEventList(category: string) {
    // optional: store category in service or queryParams
    this.router.navigate(['/events-list'], { queryParams: { category } });
  }
}
