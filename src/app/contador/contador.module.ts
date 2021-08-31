import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; //No se necesita porque no hay directivas en el template
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
//   imports: [CommonModule],
})
export class ContadorModule {}
