import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';

import { EmergyService } from '../emergy.service';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  fasesIA = [
    { label: 'Treinamento', value: 'TREINAMENTO' },
    { label: 'Inferência', value: 'INFERENCIA' },
    { label: 'Desenvolvimento', value: 'DESENVOLVIMENTO' }
  ];
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
    private poNotification: PoNotificationService, private emergyService: EmergyService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      fase: new FormControl('', Validators.required),
      inferencias: new FormControl(null, Validators.required),
      energiaConsumida: new FormControl(null, Validators.required),
      uevEnergia: new FormControl(null, Validators.required),
      horasTrabalho: new FormControl(null, Validators.required),
      uevHora: new FormControl(null, Validators.required),
      custoEquipamento: new FormControl(null, Validators.required),
      uevEquipamento: new FormControl(null, Validators.required)
    });
  }

  goToHome() {
    this.resetForm();
    this.router.navigate(['/']);
  }
  
  onSubmit(): void {
    const formValue = this.form.value;

    const payload = {
      processo: {
        nome: formValue.nome || '',
        fase: formValue.fase || '',
        inferencias: formValue.inferencias || 0
      },
      recursosComputacionais: {
        energiaConsumida: formValue.energiaConsumida || 0,
        uevEnergia: formValue.uevEnergia || 0
      },
      recursosHumanos: {
        horasTrabalho: formValue.horasTrabalho || 0,
        uevHora: formValue.uevHora || 0
      },
      materiaisEquipamentos: {
        custoEquipamento: formValue.custoEquipamento || 0,
        uevEquipamento: formValue.uevEquipamento || 0
      }
    };

    this.http.post('http://localhost:8080/calcular-emergia', payload).subscribe({
      next: (response) => {
        this.emergyService.setResults(response);
        this.router.navigate(['/resultados']);
      },
      error: (error) => {
        this.poNotification.error('Certifique-se de prencher os campos obrigatórios, se o erro persistir, por favor tente novamente mais tarde.');
      }
    });
  }

  resetForm() {
    this.form.reset();
  }
}
