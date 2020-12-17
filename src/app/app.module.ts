import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { Router, RouterModule } from '@angular/router';
import { ResultadoComponent } from './pages/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GaleriaComponent,
    CardComponent,
    HomeComponent,
    DetalleComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule//,
    //RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
