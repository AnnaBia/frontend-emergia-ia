import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumnSpacing } from '@po-ui/ng-components';

@Component({
  selector: 'app-emergy',
  standalone: false,
  templateUrl: './emergy.component.html',
  styleUrl: './emergy.component.css'
})
export class EmergyComponent {
  columns = [
    { property: 'item', label: 'Elemento do Processo' },
    { property: 'emergia', label: 'Emergia Oculta Envolvida' }
  ];

  items = [
    {
      item: 'Treinamento de um modelo de IA',
      emergia: 'Energia elétrica dos servidores, construção dos data centers, manutenção de sistemas'
    },
    {
      item: 'Construção de um servidor',
      emergia: 'Mineração de metais, produção industrial, transporte global'
    },
    {
      item: 'Equipe técnica',
      emergia: 'Educação, infraestrutura de escolas/universidades, deslocamento, energia humana'
    },
    {
      item: 'Rede de internet',
      emergia: 'Infraestrutura de cabos, torres, manutenção, energia de operação contínua'
    }
  ];

  spacingSmall: PoTableColumnSpacing = PoTableColumnSpacing.Small;

  constructor(private router: Router) { }

  goToCalculator() {
    this.router.navigate(['/calculadora']);
  }
}
