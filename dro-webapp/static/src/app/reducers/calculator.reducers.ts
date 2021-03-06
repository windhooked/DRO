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

import { REINITIALIZE_CALCULATOR, CALCULATOR, DIRECTION, DISPLAY_STRING } from '../actions/calculator.actions';

export interface Op {
    (firstOperand: number, secondOperand: number): number;
}

export interface ICalculator {
    displayString: string;
    displayValue: number;
    buffer: number;
    memoryValue: number;
    op: Op;
    direction: string;
}

export interface ICalculatorState {
    calculator: ICalculator;
}

export const INITIAL_CALCULATOR_STATE: ICalculatorState = {
    calculator: {
        displayString: '0',
        displayValue: undefined,
        buffer: undefined,
        memoryValue: undefined,
        op: undefined,
        direction: 'left'
    }
};

const numericRegExp = new RegExp('^[0-9\.]$');
const functionRegExp = new RegExp('^([\-\+\*/])|(sin)|(cos)|(tan)|(sqrt)$');
const evalRegExp = new RegExp('^[=]$');
const negRegExp = new RegExp('^(neg)$');
const storeRegExp = new RegExp('^(MC)|(MR)|(M+)|(M-)|(Ms)$');
const clearRegExp = new RegExp('^(CE)|(C)|(del)$');

const numberFormat = new Intl.NumberFormat(
    'en',
    {
        style: 'decimal',
        maximumFractionDigits: 4,
        useGrouping: false
    });

function handleNumeric(calc: ICalculator, button: string) {

    if (button === '.') {
        if (calc.displayString.indexOf('.') >= 0 || calc.displayString.length === 0) {
            return;
        }
    }

    calc.displayString = calc.displayString + button;

    if (calc.displayString.startsWith('0') && calc.displayString.length > 1) {
        calc.displayString = calc.displayString.substring(1);
    }
}

// '^[/\+\-\*]|(sin)|(cos)|(tan)|(sqr)$'
function handleFunction(calc: ICalculator, button: string) {

    handleEval(calc);
    calc.buffer = calc.displayValue;

    switch (button) {
        case '/':
            calc.op = (a: number, b: number) => a / b;
            calc.displayString = '0';
            calc.displayValue = 0;
            break;
        case '+':
            calc.op = (a: number, b: number) => a + b;
            calc.displayString = '0';
            calc.displayValue = 0;
            break;
        case '-':
            calc.op = (a: number, b: number) => a - b;
            calc.displayString = '0';
            calc.displayValue = 0;
            break;
        case '*':
            calc.op = (a: number, b: number) => a * b;
            calc.displayString = '0';
            calc.displayValue = 0;
            break;
        case 'sin':
            calc.op = (a: number, b: number) => Math.sin(a);
            handleEval(calc);
            break;
        case 'cos':
            calc.op = (a: number, b: number) => Math.cos(a);
            handleEval(calc);
            break;
        case 'tan':
            calc.op = (a: number, b: number) => Math.tan(a);
            handleEval(calc);
            break;
        case 'sqrt':
            calc.op = (a: number, b: number) => Math.sqrt(a);
            handleEval(calc);
            break;
    }
}

function handleEval(calc: ICalculator) {

    calc.displayValue = Number(calc.displayString);
    calc.displayString = numberFormat.format(calc.displayValue);

    if (calc.op !== undefined) {
        calc.displayValue = calc.op(calc.buffer, calc.displayValue);
        calc.buffer = undefined;
        calc.op = undefined;
        calc.displayString = numberFormat.format(calc.displayValue);
    }
}

function handleNeg(calc: ICalculator) {
    if (calc.displayString.startsWith('-')) {
        calc.displayString = calc.displayString.substring(1);
    } else {
        calc.displayString = '-' + calc.displayString;
    }
}

function handleStore(calc: ICalculator, button: string) {
}

function handleClear(calc: ICalculator, button: string) {
    switch (button) {
        case 'CE':
            calc.buffer = undefined;
            calc.displayString = '0';
            calc.displayValue = undefined;
            calc.memoryValue = undefined;
            calc.op = undefined;
            break;
        case 'C':
            calc.displayString = '0';
            calc.displayValue = 0;
            break;
        case 'del':
            if (calc.displayString.length > 0) {
                calc.displayString = calc.displayString.substring(0, calc.displayString.length - 1);
            }
            if (calc.displayString.length === 0 || calc.displayString === '-') {
                calc.displayString = '0';
            }
            break;
    }
}

function handleDir(calc: ICalculator) {
    switch (calc.direction) {
        case 'left':
            calc.direction = 'right';
            break;
        default:
            calc.direction = 'left';
            break;
    }
}

export function calculatorReducer(state: ICalculatorState = INITIAL_CALCULATOR_STATE, action): ICalculatorState {

    switch (action.type) {
        case REINITIALIZE_CALCULATOR:
            return action.calculator;
        case CALCULATOR:
            let stateCopy: ICalculatorState = Object.assign({}, state);
            stateCopy.calculator = action.calculator;
            return stateCopy;
        case DIRECTION:
            stateCopy = Object.assign({}, state);
            let calc: ICalculator = stateCopy.calculator;
            calc.direction = action.direction;
            return stateCopy;
        case DISPLAY_STRING:
            stateCopy = Object.assign({}, state);
            calc = stateCopy.calculator;
            calc.displayString = action.displayString;
            return stateCopy;
    }

    return state;
}
