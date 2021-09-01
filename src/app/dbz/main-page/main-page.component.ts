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

  nuevo: Personaje ={
    nombre: 'Juan',
    poder: 200
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
}
