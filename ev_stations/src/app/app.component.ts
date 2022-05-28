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
  
  /** Diciamo ad Angular di passarci il modulo Http */
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {

  }

  /** Arrow Function che notifica la risposta e mostra i dati nella console */
  fati = (data: Station[]) => {
    /** I dati vengono inseriti nella variabile 'dati' */
    this.dati = data;
    console.log(data);
  }
  
  /** Metodo che inizia con l'evento click del bottone */
  find(stazione : HTMLInputElement){
  
    /** I valori inseriti dall'input finiscono nella variabile 'm' */
   let m = stazione.value;

   /** Il link viene preso dopo aver avviato Flask ('flask run') e cambia ogni volta che si utilizza un nuovo workspace */
   //** Viene utilizzato il metodo 'GET' per prendere i dati dal file JSON o da Flask ed inserirli nella variabile 'dataFrame' */
   this.dataFrame = this.http.get<Station[]>("https://5000-saccullop-sitoev-tzayx0wymqz.ws-eu46.gitpod.io/" + "search/" + m);
   /** Un'istanza Observable inizia a inviare valori solo quando qualcuno chiama la funzione 'subscricbe()' e poi viene chiamata la funzione 'fati' */
   this.dataFrame.subscribe(this.fati)
  }
}
