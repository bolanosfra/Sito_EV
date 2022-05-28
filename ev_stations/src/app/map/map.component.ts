import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  //** Viene creata una variabile 'map' di tipo any */
  private map:any;

  private initMap(): void {
    //** Per definire il punto centrale della mappa */
    this.map = L.map('map', {
      center: [ 47.116386, -101.299591 ],
      zoom: 1
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    //** Viene creata la mappa, formata da più parti */
    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}