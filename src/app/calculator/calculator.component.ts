import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: false,

  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  form: FormGroup;

  tipoSistemaOptions = [
    { label: 'Chatbot', value: 'chatbot' },
    { label: 'Assistente Preditivo', value: 'assistente' },
    { label: 'Robô Físico', value: 'robo' },
    { label: 'Sistema Embarcado', value: 'embarcado' },
    { label: 'Outro', value: 'outro' }
  ];
  
  faseOptions = [
    { label: 'Treinamento', value: 'treinamento' },
    { label: 'Desenvolvimento', value: 'desenvolvimento' },
    { label: 'Inferência (uso)', value: 'inferencia' },
    { label: 'Operação contínua', value: 'operacao' }
  ];
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nomeSistema: [null],
      tipoSistema: [null],
      faseAnalisada: [null],

      tipoHardware: [null],
      tempoUso: [null],
      consumoEnergetico: [null],
      uevEnergia: [null],
      emergiaComputacional: [null],

      horasTrabalhoHumano: [null],
      tipoProfissional: [null],
      uevServicosHumanos: [null],

      dispositivoFinal: [null],
      massaOuCustoEquipamento: [null],
      tempoVidaUtil: [null],

      tipoTransporte: [null],
      distanciaPercorrida: [null],
      uevTransporte: [null],

      emergiaTotal: [null],
      emergiaPorUnidade: [null],
      indiceSustentabilidade: [null]
    });
  }

  onSubmit() {
    const formData = this.form.value;
    console.log('Dados enviados:', formData);
    this.router.navigate(['/resultados']);
  }

  resetForm() {
    this.form.reset();
  }

  goToHome() {
    this.resetForm();
    this.router.navigate(['/']);
  }
}
