import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventRegistrationService {
  private apiUrl = 'http://localhost:8080/api/event/register';

  constructor(private http: HttpClient) {}

  register(registration: any): Observable<any> {
    return this.http.post(this.apiUrl, registration, { responseType: 'text' });
  }
}
