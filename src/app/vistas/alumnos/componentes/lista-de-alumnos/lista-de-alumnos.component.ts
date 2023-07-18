import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AlumnosMockService } from 'src/app/shared/services/alumnos-mock.service';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];

  @Input()
  dataSource: any[] = [];

  //localDataSource: any[] = [];

  @Output()
  eliminarAlumno = new EventEmitter<any>();

  @Output()
  editarAlumno = new EventEmitter<any>();

  constructor(private _alumnoService: AlumnosMockService) {}
  ngOnInit(): void {}
}
