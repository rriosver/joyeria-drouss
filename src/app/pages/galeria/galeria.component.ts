import { Component, OnInit } from '@angular/core';
import { Joya } from 'src/app/models/joya.model';
import { JoyaService } from 'src/app/services/joya.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  joyas: Joya[] = [];
  constructor(private joyaService: JoyaService) {
    this.joyas = this.joyaService.obtenerJoyas();
    console.log(this.joyas);
   }

  ngOnInit(): void {
  }

}
