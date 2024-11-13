import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ComplianceRequirement-card.component.html',
  styleUrls: ['./ComplianceRequirement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ComplianceRequirement-card]': 'true'
  }
})

export class ComplianceRequirementCardComponent {


}