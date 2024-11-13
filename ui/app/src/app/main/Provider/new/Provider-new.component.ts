import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Provider-new',
  templateUrl: './Provider-new.component.html',
  styleUrls: ['./Provider-new.component.scss']
})
export class ProviderNewComponent {
  @ViewChild("ProviderForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}