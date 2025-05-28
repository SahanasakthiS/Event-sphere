import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { EventRegistrationComponent } from './events-category/event-registration.component';
import { EventsListComponent } from './events-category/events-list.component';
import { EventsCategoryComponent } from './events-category/events-category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostFormComponent } from './post-form/post-form.component';
export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'std-dashboard', component: StdDashboardComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'events-register', component: EventRegistrationComponent},
    { path: 'events-list', component: EventsListComponent},
    { path: 'events-category', component: EventsCategoryComponent},
    { path : 'admin', component: AdminDashboardComponent},
    { path: 'post', component: PostFormComponent}
];
