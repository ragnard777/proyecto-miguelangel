import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { ListaDeAlumnosComponent } from './componentes/lista-de-alumnos/lista-de-alumnos.component';
import { AbmAlumnosComponent } from './componentes/abm-alumnos/abm-alumnos.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AlumnosComponent,
    ListaDeAlumnosComponent,
    AbmAlumnosComponent,
  ],
  imports: [CommonModule, MatIconModule, SharedModule, MatDialogModule],
  exports: [AlumnosComponent],
})
export class AlumnosModule {}
