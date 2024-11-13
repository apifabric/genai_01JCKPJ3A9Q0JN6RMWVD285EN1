import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Risk-card.component.html',
  styleUrls: ['./Risk-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Risk-card]': 'true'
  }
})

export class RiskCardComponent {


}