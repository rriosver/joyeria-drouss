import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'resultado/:texto', component: ResultadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
