import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events'; // note the plural 'events'

  constructor(private http: HttpClient) {}

  uploadEvent(title: string, image: File) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('image', image);
  return this.http.post('http://localhost:8080/api/events/upload', formData, {
    responseType: 'text' 
  });
}

getAllEvents() {
  return this.http.get<any[]>('http://localhost:8080/api/events');
}

}
