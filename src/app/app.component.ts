import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public infoOperacion: string = '';
  public numActual: string = '';
  public num1: number = 0;
  public num2: number = Number.MIN_VALUE;
  public operacion: string = '';

  boton = (value: string): void => {
    this.numActual = this.numActual.concat(value);
    this.infoOperacion = this.infoOperacion.concat(value);
  };

  btn_suma = (value: string): void => {
    this.num1 = parseFloat(this.numActual);
    this.infoOperacion = this.infoOperacion.concat(` ${value} `);
    this.operacion = value;
    this.limpiar();
  };

  btn_division = (value: string): void => {
    this.num1 = parseFloat(this.numActual);
    this.infoOperacion = this.infoOperacion.concat(` ${value} `);
    this.operacion = value;
    this.limpiar();
  };

  btn_multiplicacion = (value: string): void => {
    this.num1 = parseFloat(this.numActual);
    this.infoOperacion = this.infoOperacion.concat(` ${value} `);
    this.operacion = value;
    this.limpiar();
  };

  btn_resta = (value: string): void => {
    this.num1 = parseFloat(this.numActual);
    this.infoOperacion = this.infoOperacion.concat(` ${value} `);
    this.operacion = value;
    this.limpiar();
  };

  btn_igual = (): void => {
    this.num2 = parseFloat(this.numActual);
    this.calcular();
  };

  calcular = (): void => {
    let total: string = '';
    switch (this.operacion) {
      case '+':
        total = (this.num1 + this.num2).toFixed(2);
        break;
      case '-':
        total = (this.num1 - this.num2).toFixed(2);
        break;
      case '*':
        total = (this.num1 * this.num2).toFixed(2);
        break;
      case '/':
        total = (this.num1 / this.num2).toFixed(2);
        break;
    }

    this.infoOperacion = total;
    this.limpiar();
  };

  reset = (): void => {
    this.limpiar();
    this.infoOperacion = '';
    this.operacion = '';
    this.num1 = 0;
    this.num2 = Number.MIN_VALUE;
  };

  limpiar = (): void => {
    this.numActual = '';
  };
}
