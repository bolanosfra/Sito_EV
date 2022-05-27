import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from './station.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EV_Stations';
  dataFrame: Observable<Station[]>| undefined;
  dati:Station[] = undefined!;
  
  constructor(private http: HttpClient){
  
  }
  ngOnInit(): void {
    
  }
  fati = (data: Station[]) => {
    this.dati = data;
    console.log(data);
  }

  find(stazione : HTMLInputElement){
   let m = stazione.value;
   this.dataFrame = this.http.get<Station[]>("https://5000-saccullop-sitoev-xn6rwtvmfi7.ws-eu46.gitpod.io/" + "search/" + m);
   this.dataFrame.subscribe(this.fati)
  }
}
