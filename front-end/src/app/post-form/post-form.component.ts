import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']  // fix typo here
})
export class PostFormComponent {
  @Output() postSubmitted = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  event: any = {
    title: '',
    image: null,
    imageUrl: ''
  };

  constructor(private eventService: EventService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.event.imageUrl = e.target.result;
        this.event.image = file;  // store File object here
      };
      reader.readAsDataURL(file);
    }
  }

 onSubmit(): void {
  if (this.event.title && this.event.image) {
    this.eventService.uploadEvent(this.event.title, this.event.image).subscribe(() => {
      alert('Event posted');
      this.resetForm();
      this.postSubmitted.emit(this.event);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }
}

resetForm(): void {
  this.event = {
    title: '',
    image: null,
    imageUrl: ''
  };
}

onCancel(): void {
  this.cancel.emit();
  window.location.reload();  // Refresh the page
}

}
