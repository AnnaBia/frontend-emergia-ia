import { Component } from '@angular/core';
import { PoThemeA11yEnum, poThemeDefault, PoThemeService } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  constructor(private poTheme: PoThemeService) {
    this.poTheme.setCurrentThemeA11y(PoThemeA11yEnum.AA);
  }
}
