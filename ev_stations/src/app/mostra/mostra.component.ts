import { Component, Input, OnInit } from '@angular/core';
import { Station } from '../station.model';

@Component({
  selector: 'app-mostra',
  templateUrl: './mostra.component.html',
  styleUrls: ['./mostra.component.css']
})
export class MostraComponent implements OnInit {
  @Input() listaDati : Station[]  = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
