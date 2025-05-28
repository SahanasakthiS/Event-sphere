import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsListComponent } from './events-category/events-list.component';
import { EventsCategoryComponent } from './events-category/events-category.component';
import { EventRegistrationComponent } from './events-category/event-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostFormComponent } from './post-form/post-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    StdDashboardComponent,
    ProfileComponent,
    EventsCategoryComponent,
    EventsListComponent,
    EventRegistrationComponent,
    BrowserAnimationsModule,
    AdminDashboardComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    Router,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class AppModule { }
