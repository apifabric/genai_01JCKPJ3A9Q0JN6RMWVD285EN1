import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Threat-card.component.html',
  styleUrls: ['./Threat-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Threat-card]': 'true'
  }
})

export class ThreatCardComponent {


}