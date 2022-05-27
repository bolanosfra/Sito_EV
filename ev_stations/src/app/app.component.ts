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

  /** Metodo che fa una get e ritorna un observable con i dati in una lista */
  dataFrame: Observable<Station[]>| undefined;
  dati:Station[] = undefined!;
  
  
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {

  }
  fati = (data: Station[]) => { /** Arrow Function che notifica la risposta e mostra i dati nella console */
    this.dati = data;
    console.log(data);
  }
  
  find(stazione : HTMLInputElement){

   let m = stazione.value;
   
   this.dataFrame = this.http.get<Station[]>("https://5000-saccullop-sitoev-zawywz6frob.ws-eu46.gitpod.io/" + "search/" + m);
   /** Il link viene preso dopo aver avviato Flask ('flask run') e cambia ogni volta che si utilizza un nuovo workspace */
   this.dataFrame.subscribe(this.fati)
  }
}
