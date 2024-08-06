import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  heroes:Hero[] = [
    {
      name: 'Superman',
      flying: true,
      owner: Publisher.dc
    },
    {
      name: 'Batman',
      flying: false,
      owner: Publisher.dc
    },
    {
      name: 'Wonder Woman',
      flying: true,
      owner: Publisher.dc
    },
    {
      name: 'Green Lantern',
      flying: true,
      owner: Publisher.dc
    },
    {
      name: 'The Flash',
      flying: false,
      owner: Publisher.dc
    },
    {
      name: 'Ironman',
      flying: true,
      owner: Publisher.marvel
    },
    {
      name: 'Spiderman',
      flying: false,
      owner: Publisher.marvel
    },
    {
      name: 'Thor',
      flying: true,
      owner: Publisher.marvel
    },
    {
      name: 'Hulk',
      flying: false,
      owner: Publisher.marvel
    },
    {
      name: 'Luffy',
      flying: true,
      owner: Publisher.shonenJump
    },
    {
      name: 'Zoro',
      flying: false,
      owner: Publisher.shonenJump
    },
    {
      name: 'Sanji',
      flying: true,
      owner: Publisher.shonenJump
    },
    {
      name: 'God Ussop',
      flying: false,
      owner: Publisher.shonenJump
    },
  ]

  orderBy?:keyof Hero;
  isUpper:boolean = false;

  publisherMap = {
    '=0':'DC Comics',
    '=1':'Marvel Comics',
    '=2':'Shonen Jump',
  }

  toggleUpperCase():void {
    this.isUpper = !this.isUpper;
  }

  setCriteria(criteria:keyof Hero ):void {
    this.orderBy = criteria;
  }
}
