import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Incident-card.component.html',
  styleUrls: ['./Incident-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Incident-card]': 'true'
  }
})

export class IncidentCardComponent {


}