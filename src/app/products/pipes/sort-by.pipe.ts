import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( hereos: Hero[], by?: keyof Hero ): Hero[] {

    switch (by) {
      case 'name':
        return hereos.sort( (a, b) => (a.name > b.name) ? 1 : -1);
      case 'flying':
        return hereos.sort( (a, b) => (a.flying > b.flying) ? -1 : 1);
      case 'owner':
        return hereos.sort( (a, b) => (a.owner > b.owner) ? 1 : -1);
      default:
        return hereos;
    }
    return [];
  }

}
