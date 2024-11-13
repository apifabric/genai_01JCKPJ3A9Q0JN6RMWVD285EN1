import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Log-card.component.html',
  styleUrls: ['./Log-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Log-card]': 'true'
  }
})

export class LogCardComponent {


}