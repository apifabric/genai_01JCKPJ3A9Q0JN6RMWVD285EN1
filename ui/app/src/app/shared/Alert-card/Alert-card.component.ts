import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Alert-card.component.html',
  styleUrls: ['./Alert-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Alert-card]': 'true'
  }
})

export class AlertCardComponent {


}