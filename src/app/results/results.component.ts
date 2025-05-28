import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoChartSerie, PoChartType } from '@po-ui/ng-components';
import { EmergyService } from '../emergy.service';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  chartCategories: Array<string> = ['Computacional', 'Humano', 'eEquipamento'];
  chartSeries: Array<PoChartSerie> = [];
  chartTitle: string = 'Distribuição da Emergia por Recurso';
  chartType: PoChartType = PoChartType.Pie;
  resultado: any;
  showResults: boolean = false;
  tabelaEmergiaColumns: Array<any> = [
    { property: 'categoria', label: 'Categoria' },
    { property: 'valor', label: 'Emergia (sej)' },
    { property: 'percentual', label: '% do Total' }
  ];

  constructor(private router: Router, private emergyService: EmergyService) { }

  ngOnInit(): void {
    const data = this.emergyService.getResults();

    if (data) {
      this.resultado = data;
      this.chartSeries = this.generateChartData(data);
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }

  get emergyDataTable() {
    const total = this.resultado?.resultadoFinal?.total || 1;

    const recursosComputacionais = this.resultado?.recursosComputacionais?.emergia || 0;
    const recursosHumanos = this.resultado?.recursosHumanos?.emergia || 0;
    const materiaisEquipamentos = this.resultado?.materiaisEquipamentos?.emergia || 0;

    return [
      {
        categoria: 'Recursos Computacionais',
        valor: this.formatScientific(recursosComputacionais),
        percentual: this.formatPercentage(recursosComputacionais / total)
      },
      {
        categoria: 'Recursos Humanos e Serviços',
        valor: this.formatScientific(recursosHumanos),
        percentual: this.formatPercentage(recursosHumanos / total)
      },
      {
        categoria: 'Materiais e Equipamentos',
        valor: this.formatScientific(materiaisEquipamentos),
        percentual: this.formatPercentage(materiaisEquipamentos / total)
      }
    ];
  }

  generateChartData(data: any): Array<PoChartSerie> {
    return [
      {
        label: 'Computacional',
        data: data.recursosComputacionais.emergia,
        type: PoChartType.Pie,
        color: 'color-04'
      },
      {
        label: 'Humano',
        data: data.recursosHumanos.emergia,
        type: PoChartType.Pie,
        color: 'color-05'
      },
      {
        label: 'Equipamento',
        data: data.materiaisEquipamentos.emergia,
        type: PoChartType.Pie,
        color: 'color-06'
      }
    ];
  }

  exportExcel() {
    window.open('http://localhost:8080/csv', '_blank');
  }

  exportPdf() {
    window.open('http://localhost:8080/pdf', '_blank');
  }

  formatScientific(value: number): string {
    return value.toExponential(2).replace('e+', 'e');
  }

  formatPercentage(value: number): string {
    return (value * 100).toFixed(2) + '%';
  }

  goToCalculator() {
    this.router.navigate(['/calculadora']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
