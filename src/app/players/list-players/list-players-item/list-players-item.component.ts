import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-list-players-item',
  templateUrl: './list-players-item.component.html',
  styleUrls: ['./list-players-item.component.css']
})
export class ListPlayersItemComponent implements OnInit {
  players:any;
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getProducts().subscribe(data =>{
      this.players=data;
    })
  }

}
