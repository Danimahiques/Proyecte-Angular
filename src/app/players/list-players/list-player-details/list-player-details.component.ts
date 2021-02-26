import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/players';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-list-player-details',
  templateUrl: './list-player-details.component.html',
  styleUrls: ['./list-player-details.component.css']
})
export class ListPlayerDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private playersService:PlayersService) { }
  player!: Players;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> console.log(params) )
  }

}
