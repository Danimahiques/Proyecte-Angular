import { Component, Input, OnInit } from '@angular/core';

import { Players } from 'src/app/players';
import { BusquedaService } from '../../busqueda.service';
import {PlayersService} from '../../players.service';
import { FilterNamePipe } from '../filter-name.pipe';
@Component({
  selector: 'app-list-players-cards',
  templateUrl: './list-players-cards.component.html',
  styleUrls: ['./list-players-cards.component.css']
})
export class ListPlayersCardsComponent implements OnInit {
 
  @Input() player!:Players;
  criteri: string='';
  constructor(private playersService: PlayersService, private buscar:FilterNamePipe, private busqueda: BusquedaService) { }
  
  ngOnInit(): void {
  
  }
  llamar(){
   this.busqueda.setCriteri(this.criteri);
  }
}
