import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'Capitán América',
  ];

  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando...');
    const heroeBorrado = this.heroes.pop() || "";
    this.heroeBorrado = heroeBorrado;
  }
}
