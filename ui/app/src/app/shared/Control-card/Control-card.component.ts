import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Control-card.component.html',
  styleUrls: ['./Control-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Control-card]': 'true'
  }
})

export class ControlCardComponent {


}