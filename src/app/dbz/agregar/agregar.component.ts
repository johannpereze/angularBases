import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Input()
  personajes: Personaje[] = [];

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    console.log('agregando...');
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
