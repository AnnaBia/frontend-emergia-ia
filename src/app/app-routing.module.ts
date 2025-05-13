import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmergyComponent } from './emergy/emergy.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: EmergyComponent },
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'resultados', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
