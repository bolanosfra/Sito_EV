# COME ESEGUIRLO:
1. Inserire "gitpod.io#" all'interno dell'URL del repository per avviare Gitpod (https://gitpod.io#github.com/...);
2. Attendere l'installazione delle librerie;
3. Al termine, nella parte sinistra dello schermo cliccare "Remote Explorer". Saranno visibili due porte, la porta 4200 apre il sito (front-end), cliccare quindi
sull'icona "Open Browser", un nuova scheda si aprira nel browser.
4. Tornare nella finestra di Gitpod e aprire la seconda porta (5000), cliccare sull'icona "Open Browser", si aprirà una scheda con tutti i dati presenti nella
collection del database dedicato al progetto.
5. Copiare l'URL della scheda aperta nel punto 4, con la porta 5000 (l'URL inizia con "https://5000-...") e tornare nella scheda di Gitpod, nella parte sinistra dello
schermo cliccare "Explorer", e al percorso Sito_EV/ev_stations/src/app aprire il file "app.component.ts", sostituire l'URL alla riga 40 con l'URL copiato
precedentemente.
6. Al percorso Sito_EV/ev_stations/src/app aprire il file "marker.service.ts" e sostituire l'URL alla riga 12 con l'URL copiato precedentemente, mantenere "/markers"
alla fine dell'URL;
7. Ricaricare la scheda del sito (porta 4200).

# IN SINTESI:
Una volta eseguito, è possibile visualizzare le informazioni delle stazioni di rifornimento presenti negli Stati Uniti. Nella pagina è presente una casella di testo
nella quale scrivere il nome di una città o di una stazione (scrivere correttamente con spazi e numeri, è possibile ignorare maiuscole e minuscole),esempio(shell - inman) per visualizzare tutte le informazioni.
Inoltre, le stazioni vengono visualizzate in una mappa. Cliccando sui marker è possibile visualizzare città e nome della stazione in questione.
