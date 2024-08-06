import { Component } from '@angular/core';

interface Example {
    code:string,
}


@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})


export class BasicPageComponent {
  lowerName:string = 'ada lovelace';
  upperName:string = 'ADA lovLACE';
  alterName:string = 'AdA lOvElAcE';

  exampleDate:Date = new Date('10/06/23');
}
