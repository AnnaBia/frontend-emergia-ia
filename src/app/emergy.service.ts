import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergyService {

  private results: any;

  setResults(data: any) {
    this.results = data;
  }

  getResults() {
    return this.results;
  }
}
