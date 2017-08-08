import { Component } from '@angular/core';
import { CalculatorPage } from '../calculator/calculator'
import { AboutPage } from '../about/about';
import { StartPage } from '../start/start'


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  aboutTab = AboutPage;
  calculatorTab = CalculatorPage;
  startTab = StartPage;
  constructor() {
  }
}
