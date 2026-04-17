import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  #defaultColor = 'red';
  // state de mon composant
  /**
   * @var représente la couleur du background
   */
  color: WritableSignal<string> = signal(this.#defaultColor);
  constructor() {
    // let i = 0;
    // setInterval(() => {
    //   console.log(i++);
    // }, 1000)
  }
  //comportement

  // getColor() {
  // console.log('In getColor');
  //   return this.color;
  // }
  /**
   * permet de changer la couleur du background
   * @param colorInput : L'input qui représente la couleur
   */
  changeColor(colorInput: HTMLInputElement) {
    console.log('In changeColor');

    this.color.set(colorInput.value);
    colorInput.value = '';
  }
  /**
   * remet la couleur à jour avec la valeur par défaut
   */
  reset() {
    console.log('In reset');
    this.color.set(this.#defaultColor);
  }
  logColor() {
    console.log(this.color());
  }
}
