import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Incident-new',
  templateUrl: './Incident-new.component.html',
  styleUrls: ['./Incident-new.component.scss']
})
export class IncidentNewComponent {
  @ViewChild("IncidentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}