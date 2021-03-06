/*
    DRO WebApp

    Copyright (C) 2017 David Schmelter

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see
    <https://github.com/schmelly/DRO/tree/master/dro-webapp> or
    <http://www.gnu.org/licenses/>.
*/
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../reducers/app.reducers';
import { ICalculator } from '../reducers/calculator.reducers';
import { CalculatorActions } from '../actions/calculator.actions';

@Component({
  selector: 'app-calculator',
  providers: [CalculatorActions],
  template: `
  <app-calculator-view [calculator]="calculator$ | async"
    (decimalClick)="decimalClick($event);"
    (negateClick)="negateClick($event);"
    (numericClick)="numericClick($event);"
    (functionClick)="functionClick($event);"
    (evalClick)="evalClick($event);"
    (storeClick)="storeClick($event);"
    (clearClick)="clearClick($event);"
    (directionClick)="directionClick($event);">
  </app-calculator-view>
  `
})
export class CalculatorComponent {

  @select(['calculator', 'calculator']) calculator$: Observable<ICalculator>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private calcActions: CalculatorActions
  ) { }

  clearClick(event): void {
    this.calcActions.clearClick(event.button);
  }

  decimalClick(event): void {
    this.calcActions.decimalClick(event.button);
  }

  directionClick(event): void {
    this.calcActions.directionClick(event.button);
  }

  evalClick(event): void {
    this.calcActions.evalClick(event.button);
  }

  functionClick(event): void {
    this.calcActions.functionClick(event.button);
  }

  negateClick(event): void {
    this.calcActions.negateClick(event.button);
  }

  numericClick(event): void {
    this.calcActions.numericClick(event.button);
  }

  storeClick(event): void {
    this.calcActions.storeClick(event.button);
  }
}
