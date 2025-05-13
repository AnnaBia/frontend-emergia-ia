import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: false,
  
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  constructor(private router: Router) {}

  goToCalculator() {
    this.router.navigate(['/calculadora']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
