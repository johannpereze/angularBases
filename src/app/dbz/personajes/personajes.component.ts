import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];//esto ya no lo necesito por que estoy haciendo abajo el getter

  get personajes(): Personaje[] {
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) {}
}
