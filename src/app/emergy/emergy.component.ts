import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumnSpacing, PoThemeA11yEnum, poThemeDefault, PoThemeService } from '@po-ui/ng-components';

@Component({
  selector: 'app-emergy',
  standalone: false,
  templateUrl: './emergy.component.html',
  styleUrl: './emergy.component.css'
})
export class EmergyComponent {
  columns = [
    { property: 'aspecto', label: 'Aspecto' },
    { property: 'emergia', label: 'Com emergia' },
    { property: 'acv', label: 'Com ACV' }
  ];

  items = [
    { aspecto: 'Perspectiva', emergia: 'Foco na natureza', acv: 'Foco no consumidor' },
    { aspecto: 'O que mede?', emergia: 'Energia solar investida', acv: 'Impactos ambientais diretos' },
    { aspecto: 'Inclui renováveis?', emergia: 'Sim', acv: 'Nem sempre' },
    { aspecto: 'Unidade usada', emergia: 'Em joules solares (sej)', acv: 'Diversas (kg CO₂, MJ...)' }
  ];

  spacingSmall: PoTableColumnSpacing = PoTableColumnSpacing.Small;

  constructor(private router: Router) {}

  goToCalculator() {
    this.router.navigate(['/calculadora']);
  }
}
