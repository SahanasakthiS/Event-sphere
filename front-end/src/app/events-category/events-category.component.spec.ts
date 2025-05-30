import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCategoryComponent } from './events-category.component';

describe('EventsCategoryComponent', () => {
  let component: EventsCategoryComponent;
  let fixture: ComponentFixture<EventsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
