import { Component } from '@angular/core';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css'],
    standalone: false
})
export class ColorComponent {
  #defaultColor = 'red';
  // state de mon composant
  /**
   * @var représente la couleur du background
   */
  color = this.#defaultColor;

  //comportement

  /**
   * permet de changer la couleur du background
   * @param colorInput : L'input qui représente la couleur
   */
  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
  /**
   * remet la couleur à jour avec la valeur par défaut
   */
  reset() {
    this.color = this.#defaultColor;
  }
}
