import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

    // i18n Select
    public name: string = 'Fernando';
    public sex: 'male' | 'female' = 'male';

    public invitadoMap = {
      male: 'invitarlo',
      female: 'invitarla',
    }

    changeClient(){
      if (this.name == 'Melissa'){
        this.name = 'Fernando';
        this.sex = 'male';
      }
      else {
        this.name = 'Melissa';
        this.sex = 'female';
      }
    }

    // i18n Plural
    clients:string[] = ['Kareca', 'Jaime', 'Sebas', 'Nanda', 'Javier', 'Dress', 'Fernando', 'Johnson', 'Michi', 'Lesly']
    clientsMap = {
      '=0':'no tenemos clientes esperando',
      '=1':'tenemos un cliente esperando',
      'other':'tenemos # clientes esperando',
    }
    removeClient(){
      this.clients.shift();
    }

    // KeyValue Pipe
    public person = {
      name: 'Monkey D. Luffy',
      age: 19,
      address: 'Thousan D. Sunny'
    }

    // Async Pipe
    myObservable = interval(500);

    newPromise:Promise<string> = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve('Tenemos data en la promesas');
        console.log('Tenemos data en la promesas');
      }, 3000)
    })
}
