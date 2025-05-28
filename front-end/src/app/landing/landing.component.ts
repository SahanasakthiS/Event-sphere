import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
declare const particlesJS: any;
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})


export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadParticles();
  }

  loadParticles() {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
        }
      }
    });
  }

  navigateToAdmin() {
    this.router.navigate(['/admin-dashboard']);
  }

  navigateToStudent() {
    this.router.navigate(['/student-dashboard']);
  }
}