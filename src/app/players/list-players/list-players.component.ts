import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../players.service';
import { Players } from 'src/app/players';
import { BusquedaService } from '../busqueda.service';
@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players:Players[]=[];
  constructor(private playersService: PlayersService,private buscar: BusquedaService) { }
   criteri:string="";
  
  ngOnInit(): void {
    this.playersService.getProducts().subscribe(data =>{
    this.players=data;
   
     })
    // this.buscar.getCriteri().subscribe(p=>this.criteri=p);
      
  }
}
