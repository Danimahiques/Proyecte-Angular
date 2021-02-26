import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from '../players';
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

   urlJson='assets/json/players.json';
    

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Players[]>{   // retorna un observable al que cal subscriure's

  return this.http.get<{players: Players[]}>(this.urlJson).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
    map(response => response.players) // de la resposta traguem l'array que ens interessa
     
    );
}

}





