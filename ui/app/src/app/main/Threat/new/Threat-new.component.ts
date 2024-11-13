import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Threat-new',
  templateUrl: './Threat-new.component.html',
  styleUrls: ['./Threat-new.component.scss']
})
export class ThreatNewComponent {
  @ViewChild("ThreatForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}