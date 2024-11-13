import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Assessment-card.component.html',
  styleUrls: ['./Assessment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Assessment-card]': 'true'
  }
})

export class AssessmentCardComponent {


}