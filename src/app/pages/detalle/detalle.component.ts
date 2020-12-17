import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joya } from 'src/app/models/joya.model';
import { JoyaService } from 'src/app/services/joya.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  joya: Joya;
  constructor(private activatedReoute: ActivatedRoute,
              private joyaService: JoyaService,
              private router: Router) {

      this.activatedReoute.params.subscribe(parms => {
        this.joya = this.joyaService.obtenerJoya(+parms['id'].toString());
        console.log(this.joya);
      })
  }

  ngOnInit(): void {
  }

}
