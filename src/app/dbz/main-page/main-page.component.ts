import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegetta',
      poder: 7500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 6000,
  };

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(event: Personaje) {
    console.log(event);
    this.personajes.push(event);
  }
}
