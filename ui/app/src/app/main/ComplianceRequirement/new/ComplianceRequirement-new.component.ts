import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ComplianceRequirement-new',
  templateUrl: './ComplianceRequirement-new.component.html',
  styleUrls: ['./ComplianceRequirement-new.component.scss']
})
export class ComplianceRequirementNewComponent {
  @ViewChild("ComplianceRequirementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}