import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joya } from 'src/app/models/joya.model';
import { JoyaService } from 'src/app/services/joya.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  joyas?: Joya[] = [];
  texto: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private joyaService: JoyaService) {
    this.activatedRoute.params.subscribe(parms => {
      this.texto = parms['texto'];
      this.joyas = this.joyaService.buscarJoya(this.texto);
      this.texto = '';
    })
   }

  ngOnInit(): void {
  }

}
