import { Injectable } from '@angular/core';
import { Joya } from '../models/joya.model';
import { joyas } from '../const/joyas.const'; 

@Injectable({
  providedIn: 'root'
})
export class JoyaService {
  private joyas: Joya[] = [];
  constructor() { 
    console.log('este es un servicio de joya');
    this.joyas = joyas;
  }

  obtenerJoyas() : Joya[] {
    return this.joyas;
  }

  obtenerJoya(index: number): Joya {
    return this.joyas[index];
  }

  buscarJoya(texto: string): Joya[] {
    return this.joyas.map( (joya, index) => ( {...joya, id: index} )  )
                    .filter( j => j.nombre.toLowerCase().trim().includes(texto.toLowerCase() ));
  }
}
