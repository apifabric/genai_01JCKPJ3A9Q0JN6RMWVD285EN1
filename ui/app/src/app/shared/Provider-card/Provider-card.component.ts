import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Provider-card.component.html',
  styleUrls: ['./Provider-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Provider-card]': 'true'
  }
})

export class ProviderCardComponent {


}