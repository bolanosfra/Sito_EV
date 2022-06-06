import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'rxjs';
import { Station } from './station.model';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  baseUrl : string = "https://5000-bolanosfra-sitoev-fnvf4hbxyt3.ws-eu46.gitpod.io/markers"
  constructor(private http: HttpClient) { 
    
  }
  
   makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      for (const c of res) {
        console.log(c.Coordinates.Latitude)
        const lon = c.Coordinates.Longitude;
        const lat = c.Coordinates.Latitude;
        const Station = c.Coordinates.Station_Name;
        const City = c.Coordinates.City;
        const marker = L.marker([lat, lon]);

        marker.addTo(map).bindPopup("Stazione: " + Station + '<br/>' + "Città: " + City);
        
      }
    })
   }
}

