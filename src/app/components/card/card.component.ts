import { Component, Input, OnInit } from '@angular/core';
import { Joya } from 'src/app/models/joya.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() joya!: Joya;
  @Input() index!: number;
  constructor() {
    if(this.joya)
      console.log(this.joya);
   }

  ngOnInit(): void {
  }

}
