import { Injectable } from '@angular/core';
import { ALUMNOS_MOCK } from '../constantes/constantes';

@Injectable({
  providedIn: 'root',
})
export class AlumnosMockService {
  alumnos: any[] = [];

  constructor() {
    this.alumnos = ALUMNOS_MOCK;
    console.log('Estoy en el constructor del servicio de alumnos');
  }

  obtener() {
    return this.alumnos;
  }

  agregar(alumno: any): void {
    this.alumnos.push(alumno);
  }
}
