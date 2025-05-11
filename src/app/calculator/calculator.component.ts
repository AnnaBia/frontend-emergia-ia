import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: false,

  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }
}
