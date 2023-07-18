import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mostrarPagina = true;

  ngOnInit(): void {
    console.log('Paso por el home del componente');

    /* this.mostrarPagina = true; */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('paso por el ngOnChanges del home');
  }
}
