import { Pipe, PipeTransform } from '@angular/core';
import { Players } from 'src/app/players';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(players: Players[], criteri: string): Players[] {
  criteri= criteri ? criteri.toLocaleLowerCase() : "";
  players=players? players.filter(p=> p.name.toLocaleLowerCase().includes(criteri)):players;
    console.log(criteri);
    return players;
  }

}
