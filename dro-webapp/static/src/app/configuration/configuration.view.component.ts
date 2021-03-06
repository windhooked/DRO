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
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IConfiguration } from '../reducers/configuration.reducers';

@Component({
  selector: 'app-configuration-view',
  styleUrls: ['./configuration.view.component.css'],
  templateUrl: './configuration.view.component.html'
})
export class ConfigurationViewComponent {

  @Input() configuration: IConfiguration;
  @Output() invertAxisSelectionClick: EventEmitter<any> = new EventEmitter();

  getInvertedStyle(axis: string) {
    let selected = false;
    switch (axis) {
      case 'yAxis':
        selected = this.configuration.invertY;
        break;
      case 'zAxis':
        selected = this.configuration.invertZ;
        break;
      default:
        selected = this.configuration.invertX;
        break;
    }

    return selected ? 'selected' : '';
  }
}
