import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { AlumnosComponent } from './vistas/alumnos/alumnos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
